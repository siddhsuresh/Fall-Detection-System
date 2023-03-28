-- CreateTable
CREATE TABLE "Falldetector" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "accuracyMaximum" REAL NOT NULL,
    "gyroMaximum" REAL NOT NULL,
    "accuracyKurtosis" REAL NOT NULL,
    "gyroKurtosis" REAL NOT NULL,
    "linMar" REAL NOT NULL,
    "accuracySkewness" REAL NOT NULL,
    "gyroSkewness" REAL NOT NULL,
    "postGyroMaximum" REAL NOT NULL,
    "postLinMaximum" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Sensor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "accX" REAL NOT NULL,
    "accY" REAL NOT NULL,
    "accZ" REAL NOT NULL,
    "gyroX" REAL NOT NULL,
    "gyroY" REAL NOT NULL,
    "gyroZ" REAL NOT NULL
);
