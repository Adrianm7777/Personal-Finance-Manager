from django.shortcuts import render
from rest_framework import viewsets
from .models import Expense, Income
from . serializers import ExpenseSerializer, IncomeSerializer


class IncomeViewSet(viewsets.ModelViewSet):
    queryset = Income.objects.all()
    serializer_class = IncomeSerializer

class ExpenseViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer