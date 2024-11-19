from django.db import models

INCOME_CATEGORIES =[("Salary", "Salary"),
    ("Freelance", "Freelance"),
    ("Investment", "Investment"),
    ("Gift", "Gift"),]


EXPENSE_CATEGORIES = [
    ("Food", "Food"),
    ("Rent", "Rent"),
    ("Utilities", "Utilities"),
    ("Entertainment", "Entertainment"),
    ("Transportation", "Transportation"),
]


class Income(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    source = models.CharField(max_length=255, default=0.00)
    date = models.DateField()
    category = models.CharField(max_length=50 ,choices=INCOME_CATEGORIES,blank=True)

    def __str__(self):
        return f"{self.source} ({self.category}): {self.amount}"

class Expense(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    category = models.CharField(max_length=255,choices=EXPENSE_CATEGORIES ,default=0.00)
    date = models.DateField()

    def __str__(self):
        return f"{self.category}: {self.amount}"