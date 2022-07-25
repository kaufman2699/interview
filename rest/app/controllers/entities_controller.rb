class EntitiesController < ApplicationController
  CLIENTS = [
    {
      name: "e-Magination Systems Design",
      identifier: "0110100100",
      category: "client"
    },
    {
      name: "e-Magination Systems Design",
      identifier: "PR-0110100100",
      category: "prospect"
    },
    {
      name: "Q4 Audit",
      identifier: "72a0d9b46a1560f21bf5649e8e3f0e17b43f0abb",
      category: "job"
    }
  ];

  def index
    search_term = search_params[:term]

    if (search_params)
      clients = CLIENTS.filter do |client|
        client[:name].downcase.include? search_term
      end
    else
      clients = CLIENTS
    end

    clients.map! do |client|
      {
        name: client[:name],
        clientNumber: client[:identifier]
      }
    end

    render json: clients.map
  end

  private

  def search_params
    params.permit(:term)
  end
end