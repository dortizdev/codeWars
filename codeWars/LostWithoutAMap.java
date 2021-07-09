import java.util.*;

public class Maps {
  public static int[] map(int[] arr) {
    int[] nums = Arrays.stream(arr)
                        .map(x -> x * 2)
                        .toArray();
    return nums;
      }
}