require 'rails_helper'

describe 'Cashes API', type: :request do
    let(:flow_category) { FactoryBot.create(:flow_category, flow_type: 'expense', name: 'Useless Things') }

    describe 'GET /cashes' do
        it 'returns all cashes' do

            FactoryBot.create(:cash, value: 99.90, flow_category: flow_category, description: 'bought a TV')
            FactoryBot.create(:cash, value: 10000.00, flow_category: flow_category, description: 'Salary')

            get '/api/v1/cashes'

            expect(response).to have_http_status(:success)
            expect(JSON.parse(response.body).size).to eq(2)
        end
    end
    
    describe 'POST /cashes' do
        it 'create new cash' do

            expect {
                post '/api/v1/cashes', params: { 
                    cash: { value: 429.90, flow_category_id: flow_category.id, description: 'bought Iphone' },
                }
            }.to change { Cash.count }.from(0).to(1)

            expect(response).to have_http_status(:created)
        end
    end
    
    describe 'DELETE /cashes/:id' do
        it 'does not find a cash to delete' do
            
            delete '/api/v1/cashes/1'

            expect(response).to have_http_status(:not_found)
        end

        

        it 'deletes a cash' do
            cash = FactoryBot.create(:cash, value: 59.90, flow_category: flow_category, description: 'Stocks')
            
            expect {
                delete "/api/v1/cashes/#{cash.id}"
            }.to change { Cash.count }.from(1).to(0)
            

            expect(response).to have_http_status(:no_content)
        end
    end
end