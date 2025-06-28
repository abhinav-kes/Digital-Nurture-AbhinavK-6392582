CREATE TABLE Customers (
    CustomerID   NUMBER PRIMARY KEY,
    Name         VARCHAR2(100),
    DOB          DATE,
    Balance      NUMBER,
    LastModified DATE,
    IsVIP        CHAR(1) 
);

CREATE TABLE Loans (
    LoanID       NUMBER PRIMARY KEY,
    CustomerID   NUMBER,
    LoanAmount   NUMBER,
    InterestRate NUMBER,
    StartDate    DATE,
    EndDate      DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);


INSERT INTO Customers VALUES (1, 'Alice', TO_DATE('1955-06-10', 'YYYY-MM-DD'), 12000, SYSDATE, 'N');
INSERT INTO Customers VALUES (2, 'Bob', TO_DATE('1985-03-22', 'YYYY-MM-DD'), 8000, SYSDATE, 'N');
INSERT INTO Customers VALUES (3, 'Charlie', TO_DATE('1960-11-15', 'YYYY-MM-DD'), 15000, SYSDATE, 'N');

INSERT INTO Loans VALUES (101, 1, 500000, 9.5, SYSDATE - 100, SYSDATE + 10);
INSERT INTO Loans VALUES (102, 2, 300000, 10.0, SYSDATE - 200, SYSDATE + 45);
INSERT INTO Loans VALUES (103, 3, 700000, 8.5, SYSDATE - 150, SYSDATE + 20);

SELECT
    CUSTOMERID,
    NAME,
    DOB,
    BALANCE,
    LASTMODIFIED,
    ISVIP
FROM
    CUSTOMERS;

SELECT
    LOANID,
    CUSTOMERID,
    LOANAMOUNT,
    INTERESTRATE,
    STARTDATE,
    ENDDATE
FROM
    LOANS;


--Scenario 1
BEGIN
  FOR c IN (
    SELECT l.LoanID
    FROM Customers c
    JOIN Loans l ON c.CustomerID = l.CustomerID
    WHERE FLOOR(MONTHS_BETWEEN(SYSDATE, c.DOB) / 12) > 60
  ) LOOP
    UPDATE Loans
    SET InterestRate = InterestRate - (InterestRate * 0.01)
    WHERE LoanID = c.LoanID;
  END LOOP;
END;


--Scenario 2
BEGIN
  FOR c IN (SELECT CustomerID, Balance FROM Customers) LOOP
    IF c.Balance > 10000 THEN
      UPDATE Customers SET IsVIP = 'Y' WHERE CustomerID = c.CustomerID;
    ELSE
      UPDATE Customers SET IsVIP = 'N' WHERE CustomerID = c.CustomerID;
    END IF;
  END LOOP;
END;

--Scenario 3
SET SERVEROUTPUT ON;
BEGIN
  FOR rec IN (
    SELECT c.Name, l.LoanID, l.EndDate
    FROM Loans l
    JOIN Customers c ON l.CustomerID = c.CustomerID
    WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Dear '||rec.Name||', your loan (ID: '||rec.LoanID|| 
                         ') is due on ' || TO_CHAR(rec.EndDate, 'DD-Mon-YYYY') || '.');
  END LOOP;
END;