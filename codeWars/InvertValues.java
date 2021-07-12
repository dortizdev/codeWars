import java.util.Arrays;

public class Kata {
  public static int[] invert(int[] array) {
    int[] inverted = Arrays.stream(array)
                          .map(num -> num * -1) 
                          .toArray();
    return inverted;
  }
}