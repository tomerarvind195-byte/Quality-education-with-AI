import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';
import { isValidEmail, isValidPassword } from '../utils/validators.js';

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log("Register Request:", req.body);

    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'Please add all fields'
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        message: 'Invalid email format'
      });
    }

    if (!isValidPassword(password)) {
      return res.status(400).json({
        message: 'Password must be at least 6 characters'
      });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: 'User already exists'
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    generateToken(res, user._id);

    return res.status(201).json({
      success: true,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (err) {
    console.error("REGISTER ERROR:", err);

    return res.status(500).json({
      success: false,
      message: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
  }
};

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && !user.isActive) {
      return res.status(401).json({
        message: 'Your account has been disabled by an admin'
      });
    }

    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);

      return res.json({
        success: true,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    }

    return res.status(401).json({
      message: 'Invalid email or password'
    });

  } catch (err) {
    console.error("LOGIN ERROR:", err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// @desc    Logout user
export const logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({
    message: 'Logged out successfully',
  });
};

// @desc    Get current user
export const getMe = async (req, res) => {
  try {
    res.status(200).json({
      user: {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
      },
    });
  } catch (err) {
    console.error("GET ME ERROR:", err);

    res.status(500).json({
      message: err.message,
    });
  }
};