def find_max(numbers):
    """
    Find the maximum value in a list of numbers.
    
    Parameters:
    numbers (list): A list of integers or floats.
    
    Returns:
    int/float: The maximum value found in the list.
    """
    if not numbers:
        return None  # Return None if the list is empty
    else:
        max_number = numbers[0]
        for number in numbers:
            if number > max_number:
                max_number = number
        return max_number

# Example usage
numbers_list = [3, 5, -2, 9, 1, 4]
print(find_max(numbers_list))  # Output: 9
