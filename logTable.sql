
CREATE TABLE IF NOT EXISTS 
"TRX_LOG" ("id"  SERIAL , "fecha_TRX" TIMESTAMP WITH TIME ZONE NOT NULL, 
"json_TRX" TEXT, PRIMARY KEY ("id"));