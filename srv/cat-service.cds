service AribacuspaymentService {
     @readonly entity ARecords {Records: many {Name: String; UniqueName: String;}};
     @readonly entity Invoice {Name: String; UniqueName: String;};
}