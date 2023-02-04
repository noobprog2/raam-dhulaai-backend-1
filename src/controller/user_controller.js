const User = require('./../model/User');
const catchAsync = require('./../util/catchAsync');
const AppError = require('./../util/appError');


exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users
    }
  });
});


  exports.getUser = (req, res) => {
    res.status(500).json({
      status: 'error',
      message: 'This route is not yet defined!'
    });
  };
  exports.createUser = (req, res) => {
    res.status(500).json({
      status: 'error',
      message: 'This route is not yet defined!'
    });
  };
  exports.updateUser = (req, res) => {
    res.status(500).json({
      status: 'error',
      message: 'This route is not yet defined!'
    });
  };
  exports.deleteUser = catchAsync(async(req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
  
    if (!user) {
      return next(new AppError('No tour found with that ID', 404));
    }
  
    res.status(204).json({
      status: 'success',
      data: null
    });
  });