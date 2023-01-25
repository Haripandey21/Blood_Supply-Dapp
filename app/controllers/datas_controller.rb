class DatasController < ApplicationController

    def getDataOfBlood
        @bloodDatas = params[:bloodData]
        while @bloodDatas.length >Bloodunit.count
        Bloodunit.create(blood_unique_id: @bloodDatas[Bloodunit.count +1][0],blood_group: @bloodDatas[Bloodunit.count +1][1],donated_time: @bloodDatas[Bloodunit.count +1][2], status: @bloodDatas[Bloodunit.count +1][3])
        end    
    end  

end

