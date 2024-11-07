from rest_framework import serializers
from .models import Expense, Income

class IncomeSerializer(serializers.Serializer):
    class Meta:
        model = Income
        fields = '__all__'

class ExpenseSerializer(serializers.Serializer):
    class Meta:
        model = Expense
        fields = '__all__'