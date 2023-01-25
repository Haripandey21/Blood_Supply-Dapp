class SuppliersController < ApplicationController

    def adddonors
    end 
    def shipbloods
    end 
    
    def getdata
        @suppliers = params[:suppliers]
        while @suppliers.length >Supplier.count
          Supplier.create(address: @suppliers[Supplier.count +1][0],name: @suppliers[Supplier.count +1][1], phone_number: @suppliers[Supplier.count +1][2],added_time: @suppliers[Supplier.count +1][3])  
        end 
    end    

end
