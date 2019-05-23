export class SpeedUnitConverter {

    
     /**
      * this method is responsible of converting 
     * from Kmph => Mph
      * @param value will always be in Kmph
      */
     public static KmphToMph(value) {
         let result = 0.6214 * value
         // toFixed converts the number to sting
         return result.toFixed(2)
     }

}