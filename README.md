# Club Manager

A web application for managing football clubs, players, and coaches. Built with Node.js, Express, PostgreSQL, and EJS.

## 📌 Features

- View, create, edit, and delete **clubs**, **players**, and **coaches**
- Track player positions, ages, and assigned clubs
- Relational PostgreSQL schema with foreign key constraints and cascading deletes
- Clean and functional UI with EJS templates
- Organized codebase using Express routing and modular structure

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Templating**: EJS
- **Styling**: Custom CSS

## 🗃 Database Schema

- **clubs** (id, name, founded_year, stadium_name, country)
- **players** (id, name, position, age, club_id)
- **coaches** (id, name, role, age, club_id)
