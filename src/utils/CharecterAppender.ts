export enum chars {
    DOLLAR = '$',
    KMPH = 'Km/ph',
    MPH = 'Mph'
}

export class CharecterAppender {


    /**
     * this class is responsible of appending charecter to the end of a specified value
     * @param value, append a charecter to this value
     * @param charType, what charecter to append
     */

     public static append(value: any, charType: any) {
         switch(charType) {
             case chars.DOLLAR: 
                return value + ' ' + chars.DOLLAR
            case chars.KMPH:
                return value + ' ' + chars.KMPH
            case chars.MPH:
                return value + ' ' + chars.MPH
         }
     }

}
