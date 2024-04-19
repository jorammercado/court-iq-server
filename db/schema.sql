DROP DATABASE IF EXISTS capstone_dev;
CREATE DATABASE capstone_dev;

\c capstone_dev;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    displayname VARCHAR(50) DEFAULT 'first last',
    firstname VARCHAR(50) DEFAULT 'first name unknown',
    lastname VARCHAR(50) DEFAULt 'last name unknown',
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    photourl TEXT DEFAULT 'photourl',
    about TEXT DEFAULT 'about me',
    dob TIMESTAMP DEFAULT '1/1/2024',
    active BOOLEAN DEFAULT true,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE players (
 player_id SERIAL PRIMARY KEY,
 player TEXT NOT NULL,
 birth_year TEXT DEFAULT 'unknown',
 age INT DEFAULT 0,
 season INT DEFAULT 0,
 experience INT DEFAULT 0,
 pos TEXT DEFAULT 'unknown',
 tm TEXT DEFAULT 'unknown'
);

CREATE TABLE seasons (
    season_id SERIAL PRIMARY KEY,
    season INT NOT NULL,
    player TEXT NOT NULL,
    pos TEXT DEFAULT 'unknown',
    age INT DEFAULT 0,
    experience INT DEFAULT 0,
    lg TEXT DEFAULT 'NBA',
    tm TEXT DEFAULT 'unknown',
    g INT DEFAULT 0,
    gs INT DEFAULT 0,
    mp_per_game INT DEFAULT 0,
    fg_per_game INT DEFAULT 0,
    fga_per_game INT DEFAULT 0,
    fg_percent INT DEFAULT 0,
    x3p_per_game INT DEFAULT 0,
    x3pa_per_game INT DEFAULT 0,
    x3p_percent INT DEFAULT 0,
    x2p_per_game INT DEFAULT 0,
    x2pa_per_game INT DEFAULT 0,
    x2p_percent INT DEFAULT 0,
    e_fg_percent INT DEFAULT 0,
    ft_per_game INT DEFAULT 0,
    fta_per_game INT DEFAULT 0,
    ft_percent INT DEFAULT 0,
    orb_per_game INT DEFAULT 0,
    drb_per_game INT DEFAULT 0,
    trb_per_game INT DEFAULT 0,
    ast_per_game INT DEFAULT 0,
    stl_per_game INT DEFAULT 0,
    blk_per_game INT DEFAULT 0,
    tov_per_game INT DEFAULT 0,
    pf_per_game INT DEFAULT 0,
    pts_per_game INT DEFAULT 0,
    player_id INTEGER REFERENCES players (player_id)
    ON DELETE CASCADE
);

CREATE TABLE playersimage (
 player_id SERIAL PRIMARY KEY,
 player TEXT NOT NULL,
 birth_date TEXT DEFAULT 'unknown',
 image_url TEXT DEFAULT 'unknown'
);

CREATE TABLE knickspropsheading (
    heading_id SERIAL PRIMARY KEY,
    away_team TEXT,
    home_team TEXT,
    commence_time TEXT
);

CREATE TABLE  flattenedprops(
    prop_id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT,
    price INT,
    point INT,
    bookmaker TEXT,
    last_update TEXT
);