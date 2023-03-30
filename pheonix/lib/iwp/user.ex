defmodule Iwp.User do
  @moduledoc """
  The User context.
  """

  import Ecto.Query, warn: false
  alias Iwp.Repo

  alias Iwp.User.SensorReading

  @doc """
  Returns the list of sensor_readings.

  ## Examples

      iex> list_sensor_readings()
      [%SensorReading{}, ...]

  """
  def list_sensor_readings do
    Repo.all(SensorReading)
  end

  @doc """
  Gets a single sensor_reading.

  Raises `Ecto.NoResultsError` if the Sensor reading does not exist.

  ## Examples

      iex> get_sensor_reading!(123)
      %SensorReading{}

      iex> get_sensor_reading!(456)
      ** (Ecto.NoResultsError)

  """
  def get_sensor_reading!(id), do: Repo.get!(SensorReading, id)

  @doc """
  Creates a sensor_reading.

  ## Examples

      iex> create_sensor_reading(%{field: value})
      {:ok, %SensorReading{}}

      iex> create_sensor_reading(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_sensor_reading(attrs \\ %{}) do
    %SensorReading{}
    |> SensorReading.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a sensor_reading.

  ## Examples

      iex> update_sensor_reading(sensor_reading, %{field: new_value})
      {:ok, %SensorReading{}}

      iex> update_sensor_reading(sensor_reading, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_sensor_reading(%SensorReading{} = sensor_reading, attrs) do
    sensor_reading
    |> SensorReading.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a sensor_reading.

  ## Examples

      iex> delete_sensor_reading(sensor_reading)
      {:ok, %SensorReading{}}

      iex> delete_sensor_reading(sensor_reading)
      {:error, %Ecto.Changeset{}}

  """
  def delete_sensor_reading(%SensorReading{} = sensor_reading) do
    Repo.delete(sensor_reading)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking sensor_reading changes.

  ## Examples

      iex> change_sensor_reading(sensor_reading)
      %Ecto.Changeset{data: %SensorReading{}}

  """
  def change_sensor_reading(%SensorReading{} = sensor_reading, attrs \\ %{}) do
    SensorReading.changeset(sensor_reading, attrs)
  end

  alias Iwp.User.FallSensorReading

  @doc """
  Returns the list of fall_sensor_readings.

  ## Examples

      iex> list_fall_sensor_readings()
      [%FallSensorReading{}, ...]

  """
  def list_fall_sensor_readings do
    Repo.all(FallSensorReading)
  end

  @doc """
  Gets a single fall_sensor_reading.

  Raises `Ecto.NoResultsError` if the Fall sensor reading does not exist.

  ## Examples

      iex> get_fall_sensor_reading!(123)
      %FallSensorReading{}

      iex> get_fall_sensor_reading!(456)
      ** (Ecto.NoResultsError)

  """
  def get_fall_sensor_reading!(id), do: Repo.get!(FallSensorReading, id)

  @doc """
  Creates a fall_sensor_reading.

  ## Examples

      iex> create_fall_sensor_reading(%{field: value})
      {:ok, %FallSensorReading{}}

      iex> create_fall_sensor_reading(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_fall_sensor_reading(attrs \\ %{}) do
    %FallSensorReading{}
    |> FallSensorReading.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a fall_sensor_reading.

  ## Examples

      iex> update_fall_sensor_reading(fall_sensor_reading, %{field: new_value})
      {:ok, %FallSensorReading{}}

      iex> update_fall_sensor_reading(fall_sensor_reading, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_fall_sensor_reading(%FallSensorReading{} = fall_sensor_reading, attrs) do
    fall_sensor_reading
    |> FallSensorReading.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a fall_sensor_reading.

  ## Examples

      iex> delete_fall_sensor_reading(fall_sensor_reading)
      {:ok, %FallSensorReading{}}

      iex> delete_fall_sensor_reading(fall_sensor_reading)
      {:error, %Ecto.Changeset{}}

  """
  def delete_fall_sensor_reading(%FallSensorReading{} = fall_sensor_reading) do
    Repo.delete(fall_sensor_reading)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking fall_sensor_reading changes.

  ## Examples

      iex> change_fall_sensor_reading(fall_sensor_reading)
      %Ecto.Changeset{data: %FallSensorReading{}}

  """
  def change_fall_sensor_reading(%FallSensorReading{} = fall_sensor_reading, attrs \\ %{}) do
    FallSensorReading.changeset(fall_sensor_reading, attrs)
  end
end
