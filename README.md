# youKraft
How to install
1. Take a pull of the repo
2. The app was created using Expo, so in order to run the App you will need expo app in your phone
3. Have expo installed in the system
4. Run yarn start
5. Scan the QR code generated in the command line using your phone
6. This will start the app in your system.

NOTE: I have not provided the build assuming that you will have expo installed, if build is needed please let me know

Some points on the implementation
1. Main point of the app is the form validation, there is a very extensible form validation logic written for the form validation. Please look at the
    following file for the implementation details
    1. Form.js
    2. UserForm.js
    3. form.util.js
    
    These are few validation that exist (Please look at form.utils.js) 
      REQUIRED_TRUE - Field is required 
      CUSTOM - Pass regex pattern to validate
      EMAIL
      MOBILE
      CUSTOM_FUNCTION - This type takes an external call back and that call will validate and return either true or false for the validation
      NUMBER - Phone number
      MIN - Minimum Length
      MAX_LENGTH - Maximum Length
2. Please go through the UserForm.js to see how the form constraints are passed
3. Implementation related to Screens and navigation can be found in Navigator.js
4. Screenshots can be found in the ScreenShots folder
