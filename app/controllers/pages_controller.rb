class PagesController < ApplicationController

   def  index 
    end

    def bloodunits
    end 
    
    def suppliers
      @suppliers=Supplier.all

    end 

    def hospitals 
      @hospitals=Hospital.all
    end 

    def addsuppliers
    end
    
   def trackblood
   end 
end
