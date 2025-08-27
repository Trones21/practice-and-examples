# Sample data: list of dictionaries representing employees
employees = [
    {"name": "Alice", "department": "Sales", "score": 90},
    {"name": "Bob", "department": "Engineering", "score": 95},
    {"name": "Charlie", "department": "Engineering", "score": 95},
    {"name": "Diana", "department": "Sales", "score": 85},
    {"name": "Eve", "department": "Engineering", "score": 90},
    {"name": "Frank", "department": "HR", "score": 85},
    {"name": "Grace", "department": "HR", "score": 85},
]

# Sort employees by:
# 1. Score (descending)
# 2. Department (ascending)
# 3. Name (ascending)
sorted_employees = sorted(
    employees, key=lambda emp: (-emp["score"], emp["department"], emp["name"])
)

# Print the sorted list
for emp in sorted_employees:
    print(f"{emp['name']:7} | {emp['department']:11} | Score: {emp['score']}")
