import java.util.Arrays;

public class Kata {
  public static String findNeedle(Object[] haystack) {
    int num = Arrays.asList(haystack).indexOf("needle");
    return String.format("found the needle at position %d", num);
  }
}