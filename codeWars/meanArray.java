import java.util.*;

public class School{
 	public static int getAverage(int[] marks){
    
		int num = Arrays.stream(marks).sum();
    return num/marks.length;
	}

}