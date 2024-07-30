# Flight Status and Notifications

## Overview

This project provides a system to offer real-time flight status updates and notifications to passengers. It integrates with mock airport databases to display current flight status (e.g., delays, cancellations, gate changes) and send push notifications via SMS using Twilio.

## Features

- **Real-time Updates**: Display current flight status including delays, cancellations, and gate changes.
- **Push Notifications**: Send notifications for flight status changes via SMS.
- **Integration with Airport Systems**: Pull data from mock airport databases for accurate information.

## Tech Stack

### Frontend

- **HTML**
- **CSS**
- **React.js**

### Backend

- **Python**
  - Flask
  - APScheduler
  - pika
  - pymongo
  - python-dotenv

### Database

- **MongoDB**

### Notifications

- **RabbitMQ**
- **Twilio**

## Installation and Setup

### Prerequisites

- MongoDB
- RabbitMQ
- Python 3.x
- Node.js

### Environment Variables

Create a `.env` file in the root directory with the following variables:


### Backend Setup

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

3. **Start the Flask app**:
    ```bash
    python app.py
    ```

### Frontend Setup

1. **Navigate to the frontend directory**:
    ```bash
    cd frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the frontend development server**:
    ```bash
    npm start
    ```

## Project Structure


## Usage

### API Endpoints

- **Get Flight Status**: `/api/flight-status` (GET)
- **Send Notification**: `/api/send-notification` (POST)

### Description

- **monitor.py**: Checks for changes in live flight data compared to scheduled data and sends notifications to passengers about status changes (e.g., delays, gate changes, cancellations).
- **receive_notification.py**: Receives notifications from RabbitMQ and sends SMS messages via Twilio.
- **app.py**: Provides Flask routes for flight status and sending notifications.

## Additional Tools and Libraries

- **pymongo**: To interact with MongoDB.
- **pika**: To interact with RabbitMQ.
- **APScheduler**: To schedule periodic tasks.
- **Twilio**: For sending SMS notifications.
- **python-dotenv**: To manage environment variables.


