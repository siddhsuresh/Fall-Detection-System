defmodule IwpWeb.FallSensorReadingController do
  use IwpWeb, :controller

  alias Iwp.User
  alias Iwp.User.FallSensorReading

  def index(conn, _params) do
    fall_sensor_readings = User.list_fall_sensor_readings()
    render(conn, :index, fall_sensor_readings: fall_sensor_readings)
  end

  def new(conn, _params) do
    changeset = User.change_fall_sensor_reading(%FallSensorReading{})
    render(conn, :new, changeset: changeset)
  end

  def create(conn, %{"fall_sensor_reading" => fall_sensor_reading_params}) do
    case User.create_fall_sensor_reading(fall_sensor_reading_params) do
      {:ok, fall_sensor_reading} ->
        conn
        |> put_flash(:info, "Fall sensor reading created successfully.")
        |> redirect(to: ~p"/fall_sensor_readings/#{fall_sensor_reading}")

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, :new, changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    fall_sensor_reading = User.get_fall_sensor_reading!(id)
    render(conn, :show, fall_sensor_reading: fall_sensor_reading)
  end

  def edit(conn, %{"id" => id}) do
    fall_sensor_reading = User.get_fall_sensor_reading!(id)
    changeset = User.change_fall_sensor_reading(fall_sensor_reading)
    render(conn, :edit, fall_sensor_reading: fall_sensor_reading, changeset: changeset)
  end

  def update(conn, %{"id" => id, "fall_sensor_reading" => fall_sensor_reading_params}) do
    fall_sensor_reading = User.get_fall_sensor_reading!(id)

    case User.update_fall_sensor_reading(fall_sensor_reading, fall_sensor_reading_params) do
      {:ok, fall_sensor_reading} ->
        conn
        |> put_flash(:info, "Fall sensor reading updated successfully.")
        |> redirect(to: ~p"/fall_sensor_readings/#{fall_sensor_reading}")

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, :edit, fall_sensor_reading: fall_sensor_reading, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    fall_sensor_reading = User.get_fall_sensor_reading!(id)
    {:ok, _fall_sensor_reading} = User.delete_fall_sensor_reading(fall_sensor_reading)

    conn
    |> put_flash(:info, "Fall sensor reading deleted successfully.")
    |> redirect(to: ~p"/fall_sensor_readings")
  end
end
