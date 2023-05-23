require 'rails_helper'

describe "FlowCategories API", type: :request do
  describe 'GET /flow_categories' do
    it 'returns all categories' do


        get '/api/v1/flow_categories'

        expect(response).to have_http_status(:success)
    end
end
end
