class HospitalsController < ApplicationController

    def addpatients
    end 
    
    def getdataofhospitals
        @hospitals = params[:hospitals]
        while @hospitals.length >Hospital.count
        Hospital.create(address: @hospitals[Hospital.count +1][0],name: @hospitals[Hospital.count +1][1], phone_number: @hospitals[Hospital.count +1][2],added_time: @hospitals[Hospital.count +1][3])
      end    
    end

end
    