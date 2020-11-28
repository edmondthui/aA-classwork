class Api::BenchesController < ApplicationController

    def index
        # debugger;
        # @benches = Bench.in_bounds(params[:bounds])
        @benches = params[:bounds] ? Bench.in_bounds(params[:bounds]) : Bench.all
        if params[:max_seating] || params[:min_seating]
            @benches.each do |bench|
                if !(bench.seating > params[:min_seating] && bench.seating < params[:max_seating])
                    @benches.delete(bench);
                end
            end
        end
        # debugger;
        # @benches = Bench.all
        render :index
    end

    def create
        @bench = Bench.new(bench_params)
        if @bench.save
            render :index
        else
            render json: @bench.errors.full_messages
        end
    end

    private

    def bench_params
        params.require(:bench).permit(:description, :seating, :lat, :lng, :max_seating, :min_seating)
    end
end