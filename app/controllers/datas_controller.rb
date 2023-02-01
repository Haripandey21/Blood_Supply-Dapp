class DatasController < ApplicationController

    def getdataofblood
        @bloodDatas = params[:bloodData]
        while @bloodDatas.length >Bloodsample.count
            Bloodsample.create(blood_unique_id: @bloodDatas[Bloodsample.count +1][0],blood_group: @bloodDatas[Bloodsample.count +1][1],donated_time: @bloodDatas[Bloodsample.count +1][2])
        end    
    end  

end

