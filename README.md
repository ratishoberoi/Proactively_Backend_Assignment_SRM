# Speaker Session Booking Platform

## Overview
The Speaker Session Booking Platform is a web application that allows users to book sessions with speakers based on their availability and expertise. The platform includes features for user and speaker profile creation, session booking, email notifications, and Google Calendar integration.

## Features

1. **User and Speaker Profiles**
   - Users and speakers can create profiles with basic details (first name, last name, email, password).
   - OTP verification for user accounts.
   - Login functionality with JWT-based authentication.

2. **Speaker Listings and Expertise**
   - Speakers can set up profiles, add their expertise, and set a price per session.
   - Only authenticated speakers can access profile setup routes.

3. **Session Booking**
   - Users can browse a list of speakers.
   - Users must log in to book sessions.
   - Speakers are available for booking between 9 AM and 4 PM, with 1-hour time slots.
   - Booked time slots are blocked to prevent double bookings.

4. **Notifications and Calendar Integration**
   - Email notifications are sent to users and speakers upon successful booking.
   - Google Calendar invites are generated and shared with both parties.

## Technology Stack
- **Backend:** Node.js with Express.js
- **Database:** MySQL
- **Authentication:** JWT
- **Email Service:** Nodemailer
- **Calendar Integration:** Google Calendar API

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ratishoberoi/Proactively_Backend_Assignment_SRM.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Proactively_Backend_Assignment_SRM
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up the database:
   - Create a MySQL database named `platform_db`.
   - Run the SQL script provided in `database.sql` to set up the tables.

5. Configure environment variables:
   - Create a `.env` file in the project root with the following variables:
     ```env
     DB_HOST=localhost
     DB_USER=your-username
     DB_PASSWORD=your-password
     DB_NAME=platform_db
     JWT_SECRET=your-jwt-secret
     EMAIL_USER=your-email@example.com
     EMAIL_PASS=your-email-password
     GOOGLE_CLIENT_ID=your-google-client-id
     GOOGLE_CLIENT_SECRET=your-google-client-secret
     GOOGLE_REFRESH_TOKEN=your-google-refresh-token
     ```

6. Start the server:
   ```bash
   npm start
   ```

7. Access the application at:
   ```
   http://localhost:3000
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a user or speaker.
- `POST /api/auth/login` - Log in and receive an authentication token.
- `POST /api/auth/verify-otp` - Verify OTP for account activation.

### Speaker Management
- `POST /api/speakers/setup-profile` - Create or update speaker profiles (protected).

### Booking
- `GET /api/bookings/speakers` - List available speakers.
- `POST /api/bookings/book` - Book a session with a speaker (protected).

## Folder Structure

```
project-root/
├── controllers/
│   ├── authController.js
│   ├── bookingController.js
│   └── speakerController.js
├── middleware/
│   └── auth.js
├── models/
│   ├── index.js
│   ├── user.js
│   ├── speaker.js
│   └── booking.js
├── routes/
│   ├── auth.js
│   ├── booking.js
│   └── speaker.js
├── utils/
│   └── email.js
├── .env
├── package.json
├── database.sql
└── index.js
```

## SQL Script
The SQL script to set up the database is available in `database.sql` and contains the following tables:
- `Users`
- `Speakers`
- `Bookings`

## Future Enhancements
- User and speaker profile editing.
- Advanced search and filtering for speakers.
- Feedback and review system for booked sessions.

## Contributing
Feel free to submit issues and pull requests. Contributions are welcome.

## License
This project is licensed under the MIT License.

