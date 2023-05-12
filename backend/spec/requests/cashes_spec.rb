require 'rails_helper'

describe 'Cashes API', type: :request do
    it 'returns all cashes' do
        get '/api/v1/cashes'

        expect(response).to have_http_status(:success)
        expect(JSON.parse(response.body).size).to eq(0)
    end
end