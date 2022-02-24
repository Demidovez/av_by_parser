import { Schema, Types } from "mongoose";
const ObjectId = Schema.Types.ObjectId;

interface Advt {
  id: Types.ObjectId;
  advt_id: number; // ID на сайте
  title: string; // Заголовок
  brand: string; // Марка
  model: string; // Модель
  generation: string; // Поколение
  description: string; // Описание
  date_create: number; // Таймштамп даты создания объявления
  date_modify: number; // Таймштамп даты изменения объявления
  state: string; // Состояние (новое, бу...)
  status: string; // Статус (удален...)
  status_parse: string; // Статус парсера (ожидание, обновление...)
  price_byn: number; // Цена в рублях
  price_usd: number; // Цена в долларах
  city: string; // Город
  year: number; // Год производства
  gearbox: string; // Тип коробки передач
  volume: number; // Объем двигателя
  fuel: string; // Тип топлива
  kilometers: number; // Пробег
  carcase: string; // Кузов
  drive: string; // Привод
  color: string; // Цвет
  phones: string[]; // Номера телефон
  owner: string; // Имя владельца
  vin_status: boolean; // Вин проверян
  exchange: boolean; // Обмен возможен
  images: string[]; // Изображения
  is_private: boolean; // Частное или компание
  alloy_wheels: boolean; // Легкосплавные диски
  roof_rails: boolean; // Рейлинги на крыше
  tow_bar: boolean; // Фаркоп
  abs: boolean; // ABS
  esp: boolean; // ESP
  anti_slip: boolean; // Антипробуксовочная
  immobilizer: boolean; // Иммобилайзер
  signaling: boolean; // Сигнализация
  rain_sensor: boolean; // Датчик дождя
  behind_camera: boolean; // Камера заднего вида
  parking_sensors: boolean; // Парктроники
  control_dead_zones: boolean; // Контроль мертвых зон на зеркалах
  front_airbags: boolean; // Передние подушки
  side_airbags: boolean; // Боковые подушки
  behind_airbags: boolean; // Задние подушки
  interior_color: string; // Цвет салона
  interior_material: string; // Материал салона
  panoramic_view: boolean; // Панорамная крыша
  luke: boolean; // Люк
  version_7: boolean; // 7 местная версия
  auto_start: boolean; // Автозапуск двигателя
  cruise_control: boolean; // Круиз-контроль
  wheel_multimedia: boolean; // Управление мультимедиа с руля
  power_seats: boolean; // Электрорегулировка сидений
  front_power_windows: boolean; // Передние электро-стеклоподъёмники
  behind_power_windows: boolean; // Задние электро-стеклоподъёмники
  seat_heating: boolean; // Обогрев Сидений
  heated_windshield: boolean; // Обогрев Лобового стекла
  heated_mirrors: boolean; // Обогрев Зеркал
  wheel_heating: boolean; // Обогрев Руля
  Heater: boolean; // Автономный отопитель
  climate_control: boolean; // Климат-контроль
  air_conditioner: boolean; // Кондиционер
  aux: boolean; // AUX или iPod
  bluetooth: boolean; // Bluetooth
  cd_mp3: boolean; // CD или MP3
  usb: boolean; // USB
  multimedia_screen: boolean; // Мультимедийный экран
  regular_navigation: boolean; // Штатная навигация
  xenon_headlights: boolean; // Ксеноновые фары
  fog_lights: boolean; // Противотуманные фары
  led_headlights: boolean; // Светодиодные фары
}

export const AdvtSchema = new Schema<Advt>({
  id: ObjectId,
  advt_id: { type: Number, unique: true, required: true },
  title: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  generation: String,
  description: String,
  date_create: { type: Number, required: true },
  date_modify: { type: Number, required: true },
  state: String,
  status: String,
  status_parse: { type: String, required: true },
  price_byn: Number,
  price_usd: Number,
  city: String,
  year: Number,
  gearbox: String,
  volume: Number,
  fuel: String,
  kilometers: Number,
  carcase: String,
  drive: String,
  color: String,
  phones: [String],
  owner: String,
  vin_status: Boolean,
  exchange: Boolean,
  images: [String],
  is_private: Boolean,
  alloy_wheels: Boolean,
  roof_rails: Boolean,
  tow_bar: Boolean,
  abs: Boolean,
  esp: Boolean,
  anti_slip: Boolean,
  immobilizer: Boolean,
  signaling: Boolean,
  rain_sensor: Boolean,
  behind_camera: Boolean,
  parking_sensors: Boolean,
  control_dead_zones: Boolean,
  front_airbags: Boolean,
  side_airbags: Boolean,
  behind_airbags: Boolean,
  interior_color: String,
  interior_material: String,
  panoramic_view: Boolean,
  luke: Boolean,
  version_7: Boolean,
  auto_start: Boolean,
  cruise_control: Boolean,
  wheel_multimedia: Boolean,
  power_seats: Boolean,
  front_power_windows: Boolean,
  behind_power_windows: Boolean,
  seat_heating: Boolean,
  heated_windshield: Boolean,
  heated_mirrors: Boolean,
  wheel_heating: Boolean,
  Heater: Boolean,
  climate_control: Boolean,
  air_conditioner: Boolean,
  aux: Boolean,
  bluetooth: Boolean,
  cd_mp3: Boolean,
  usb: Boolean,
  multimedia_screen: Boolean,
  regular_navigation: Boolean,
  xenon_headlights: Boolean,
  fog_lights: Boolean,
  led_headlights: Boolean,
});
