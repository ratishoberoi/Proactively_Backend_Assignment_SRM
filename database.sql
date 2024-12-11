CREATE DATABASE platform_db;

USE platform_db;

CREATE TABLE Users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  isVerified BOOLEAN DEFAULT FALSE
);

CREATE TABLE Speakers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  expertise VARCHAR(255),
  pricePerSession FLOAT,
  userId INT,
  FOREIGN KEY (userId) REFERENCES Users(id)
);

CREATE TABLE Bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT,
  speakerId INT,
  date DATE,
  timeSlot VARCHAR(20),
  FOREIGN KEY (userId) REFERENCES Users(id),
  FOREIGN KEY (speakerId) REFERENCES Speakers(id)
);
