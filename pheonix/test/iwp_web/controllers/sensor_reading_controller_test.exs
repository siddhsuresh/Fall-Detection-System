defmodule IwpWeb.SensorReadingControllerTest do
  use IwpWeb.ConnCase

  import Iwp.UserFixtures

  @create_attrs %{accX: 120.5, accY: 120.5, accZ: 120.5, fall?: true, gyX: 120.5, gyY: 120.5, gyZ: 120.5}
  @update_attrs %{accX: 456.7, accY: 456.7, accZ: 456.7, fall?: false, gyX: 456.7, gyY: 456.7, gyZ: 456.7}
  @invalid_attrs %{accX: nil, accY: nil, accZ: nil, fall?: nil, gyX: nil, gyY: nil, gyZ: nil}

  describe "index" do
    test "lists all sensor_readings", %{conn: conn} do
      conn = get(conn, ~p"/sensor_readings")
      assert html_response(conn, 200) =~ "Listing Sensor readings"
    end
  end

  describe "new sensor_reading" do
    test "renders form", %{conn: conn} do
      conn = get(conn, ~p"/sensor_readings/new")
      assert html_response(conn, 200) =~ "New Sensor reading"
    end
  end

  describe "create sensor_reading" do
    test "redirects to show when data is valid", %{conn: conn} do
      conn = post(conn, ~p"/sensor_readings", sensor_reading: @create_attrs)

      assert %{id: id} = redirected_params(conn)
      assert redirected_to(conn) == ~p"/sensor_readings/#{id}"

      conn = get(conn, ~p"/sensor_readings/#{id}")
      assert html_response(conn, 200) =~ "Sensor reading #{id}"
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, ~p"/sensor_readings", sensor_reading: @invalid_attrs)
      assert html_response(conn, 200) =~ "New Sensor reading"
    end
  end

  describe "edit sensor_reading" do
    setup [:create_sensor_reading]

    test "renders form for editing chosen sensor_reading", %{conn: conn, sensor_reading: sensor_reading} do
      conn = get(conn, ~p"/sensor_readings/#{sensor_reading}/edit")
      assert html_response(conn, 200) =~ "Edit Sensor reading"
    end
  end

  describe "update sensor_reading" do
    setup [:create_sensor_reading]

    test "redirects when data is valid", %{conn: conn, sensor_reading: sensor_reading} do
      conn = put(conn, ~p"/sensor_readings/#{sensor_reading}", sensor_reading: @update_attrs)
      assert redirected_to(conn) == ~p"/sensor_readings/#{sensor_reading}"

      conn = get(conn, ~p"/sensor_readings/#{sensor_reading}")
      assert html_response(conn, 200)
    end

    test "renders errors when data is invalid", %{conn: conn, sensor_reading: sensor_reading} do
      conn = put(conn, ~p"/sensor_readings/#{sensor_reading}", sensor_reading: @invalid_attrs)
      assert html_response(conn, 200) =~ "Edit Sensor reading"
    end
  end

  describe "delete sensor_reading" do
    setup [:create_sensor_reading]

    test "deletes chosen sensor_reading", %{conn: conn, sensor_reading: sensor_reading} do
      conn = delete(conn, ~p"/sensor_readings/#{sensor_reading}")
      assert redirected_to(conn) == ~p"/sensor_readings"

      assert_error_sent 404, fn ->
        get(conn, ~p"/sensor_readings/#{sensor_reading}")
      end
    end
  end

  defp create_sensor_reading(_) do
    sensor_reading = sensor_reading_fixture()
    %{sensor_reading: sensor_reading}
  end
end
