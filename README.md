# JS Code Snippets

### What it contains?
* Some basic coding problems solved using JS.
* Some of those problems are solved using multiple approaches.
* Some approaches are fast in terms of time complexity while some are compact ( less line of code ) & solved using JS native functions.

### What helper function does ?

* #### <a href="https://github.com/harsh863/js-practice-snippets/blob/master/helper/_bulk.js">_bulk:</a>
  
   - _bulkRunner => Takes an array of object ( { dataset, func }[] )
     * dataset: array of arguments to be fed to executing function
     * func: function that needs to be invoked
       
   - _bulkAlternator => Takes following parameters as arguments.
     * count: No. of times each passed function needs to be executed.
     * endWithStartingFunc: Whether to execute first function again after all passed functions are executed.
     * funcs ( rest parameter ): Functions that need to be executed.

   - _bulkAlternatorPlus => Takes following parameters as arguments.
     * count: No. of times each passed function needs to be executed.
     * endWithStartingFunc: Whether to execute first function again after all passed functions are executed.
     * values ( rest parameter ): Objects of type = ( { dataset, func }[] )
    
* #### <a href="https://github.com/harsh863/js-practice-snippets/blob/master/helper/_bundler.js">_bundler:</a>
  
  Contain functions of all JS snippets in the repository with prefilled datasets.
  

* #### <a href="https://github.com/harsh863/js-practice-snippets/blob/master/helper/_compare.js">_compare:</a>

  Takes following parameters as arguments =>
    * dataset: Dataset to be fed to passed functions whose runtime needs to be compared.
    * funcs ( rest parameter ): Functions to be compared.

* #### <a href="https://github.com/harsh863/js-practice-snippets/blob/master/helper/_log.js">_log:</a>
  
  Takes following parameters as arguments =>
    * func: Function that needs to be executed 
    * args: Array of different argument whose outputs needs to be consoled.

* #### <a href="https://github.com/harsh863/js-practice-snippets/blob/master/helper/_run.js">_run:</a>
  
  Takes following parameters as arguments =>
    * dataset: Dataset to be fed to passed functions.
    * shouldLog: Whether to only log output of first passed functions or compare runtime of all passed functions on the basis of given dataset.
    * funcs: Functions who needs to executed or compared.

