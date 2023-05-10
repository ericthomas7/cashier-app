require "test_helper"

class CashesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @cash = cashes(:one)
  end

  test "should get index" do
    get cashes_url, as: :json
    assert_response :success
  end

  test "should create cash" do
    assert_difference("Cash.count") do
      post cashes_url, params: { cash: { description: @cash.description, flow_type: @cash.flow_type, value: @cash.value } }, as: :json
    end

    assert_response :created
  end

  test "should show cash" do
    get cash_url(@cash), as: :json
    assert_response :success
  end

  test "should update cash" do
    patch cash_url(@cash), params: { cash: { description: @cash.description, flow_type: @cash.flow_type, value: @cash.value } }, as: :json
    assert_response :success
  end

  test "should destroy cash" do
    assert_difference("Cash.count", -1) do
      delete cash_url(@cash), as: :json
    end

    assert_response :no_content
  end
end
