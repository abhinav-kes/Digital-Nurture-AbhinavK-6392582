CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER,
    LastModified DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Position VARCHAR2(50),
    Salary NUMBER,
    Department VARCHAR2(50),
    HireDate DATE
); 

INSERT INTO Accounts VALUES (101, 1, 'Savings', 10000, SYSDATE);
INSERT INTO Accounts VALUES (102, 2, 'Current', 15000, SYSDATE);
INSERT INTO Accounts VALUES (103, 3, 'Savings', 20000, SYSDATE);

INSERT INTO Employees VALUES (1001, 'John', 'Developer', 50000, 'IT', TO_DATE('2020-01-15', 'YYYY-MM-DD'));
INSERT INTO Employees VALUES (1002, 'Emma', 'Analyst', 45000, 'Finance', TO_DATE('2019-06-01', 'YYYY-MM-DD'));
INSERT INTO Employees VALUES (1003, 'Raj', 'Manager', 60000, 'IT', TO_DATE('2018-03-25', 'YYYY-MM-DD'));

SELECT
    ACCOUNTID,
    CUSTOMERID,
    ACCOUNTTYPE,
    BALANCE,
    LASTMODIFIED
FROM
    ACCOUNTS;

SELECT
    EMPLOYEEID,
    NAME,
    POSITION,
    SALARY,
    DEPARTMENT,
    HIREDATE
FROM
    EMPLOYEES;

--Scenario 1
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    FOR a IN (SELECT AccountID, Balance FROM ACCOUNTS WHERE AccountType='Savings')
    LOOP 
        UPDATE ACCOUNTS
        SET BALANCE=BALANCE+BALANCE*0.01, LastModified=SYSDATE
        WHERE AccountId=a.AccountID;
    END LOOP;
END;

BEGIN
    ProcessMonthlyInterest;
END;

--Scenario 2
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(P_Dept IN VARCHAR2,bonus IN NUMBER) IS
BEGIN
    UPDATE EMPLOYEES
    SET Salary=Salary+Salary*bonus/100
    WHERE Department=P_Dept;
END;

BEGIN
    UpdateEmployeeBonus('IT',25);
END;

--Scenario 3
CREATE OR REPLACE PROCEDURE TransferFunds(fromAccID IN NUMBER,toAccID IN NUMBER,Amount IN NUMBER)
IS fromBalance NUMBER;
BEGIN
    SELECT Balance INTO fromBalance FROM ACCOUNTS WHERE AccountID=fromAccID FOR UPDATE;
    IF Amount>fromBalance THEN
        RAISE_APPLICATION_ERROR(-20001,'Insufficient balance');
    END IF;
    UPDATE ACCOUNTS
    SET Balance=Balance-Amount, LastModified=SYSDATE
    WHERE AccountID=fromAccID;
    UPDATE ACCOUNTS
    SET Balance=Balance+Amount, LastModified=SYSDATE
    WHERE AccountID=toAccID;
END;

BEGIN
    TransferFunds(101,103,4000);
END;