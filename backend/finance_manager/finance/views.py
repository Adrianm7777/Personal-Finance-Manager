from django.shortcuts import render
from rest_framework import viewsets
from .models import Expense, Income
from .serializers import ExpenseSerializer, IncomeSerializer
from .categorization import categorize_transaction


class IncomeViewSet(viewsets.ModelViewSet):
    queryset = Income.objects.all()
    serializer_class = IncomeSerializer

    def perform_create(self, serializer):
        description = self.request.data.get("source", "")
        category = categorize_transaction(description)
        serializer.save(category=category)

class ExpenseViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer

    def perform_create(self, serializer):
        description = self.request.data.get("category", "")
        category = categorize_transaction(description)
        serializer.save(category=category)