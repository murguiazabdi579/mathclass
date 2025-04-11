using System;

public class MathClass {
    public static void Main() {
        // Generate a random integer between 1 and 10 (inclusive)
        int randomInt = Randomizer.GenerateRandomInteger(1, 10);

        // Print the generated integer to the console
        Console.WriteLine("The random number is: " + randomInt);
    }
}

public class Randomizer {
    public static int GenerateRandomInteger(int lowerBound, int upperBound) {
        return (int)(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
    }
}
