from django.db import models

class Income(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    source = models.CharField(max_length=255, default=0.00)
    date = models.DateField()

    def __str__(self):
        return f"{self.source}: {self.amount}"

class Expense(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    category = models.CharField(max_length=255, default=0.00)
    date = models.DateField()

    def __str__(self):
        return f"{self.category}: {self.amount}"