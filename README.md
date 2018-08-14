# Week 10 Makers Academy - Tech Test Week

## Bank Tech Test

#### Tech Used

Vanilla Javascript and Jasmine for testing.

### Using the Application
###### Clone the repo and launch:

```
git clone https://github.com/danieljonesdmj/bank-tech-test.git
cd bank-tech-test
open SpecRunner.html
```

##### Example usage:

```
# Create a new transaction
> transactionInstance = new Transaction()

# Make a deposit
> transactionInstance.deposit('13/08/2018', 20)

# Make a withdrawal
> transactionInstance.withdraw('13/08/2018', 10)

# Print a summary
> transactionInstance.printer.printAccountSummary()
```

```
date || credit || debit || balance
13/08/2018 || 20.00 ||   || 20.00
13/08/2018 ||   || -10.00 || 10.00
```

### Credits

[Daniel Jones](https://github.com/danieljonesdmj)(solo)
