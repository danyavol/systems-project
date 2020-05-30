import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './r4.scss';

class R4 extends Component {
    render() {
        return (
            <div className="homePage">
                <h4 className="text-center">4 РАЗРАБОТКА ТЕХНИЧЕСКОГО ЗАДАНИЯ</h4>
                
                <p className="no-m b">1. Общие сведения</p>
                <p className="no-m i1 b">1.1. Наименование системы</p>
                <p className="no-m i2">Полное наименование: Система Автоматизации Трудоустройства<br/>Краткое наименование: САТ</p>
                <p className="no-m i1 b">1.2. Основание для проведения работ</p>
                <p className="no-m i2">Работа выполняется на основании указа заведующего кафедры ИСИТ.</p>
                <p className="no-m i1 b">1.3. Наименование организаций</p>
                <p className="no-m i2 b">1.3.1. Заказчик</p>
                <p className="no-m i3">Заказчик: Международный университет МИТСО, кафедра ИСИТ<br/>Адрес: г.Минск, ул. Казинца 21, корп. 5</p>
                <p className="no-m i2 b">1.3.2. Разработчик</p>
                <p className="no-m i3">Разработчик: студент Волосюк Даниил Александрович<br/>группа 1820, экономический факультет.</p>
                <p className="no-m i1 b">1.4. Плановые сроки начала и окончания работы</p>
                <p className="no-m i2">Начало работ – 12.02.2020<br/>Окончание работ – 15.05.2020</p>
                <p className="no-m i1 b">1.5. Источник финансирования работ</p>
                <p className="no-m i2">Собственные средства разработчика.</p>
                <p className="no-m i1 b">1.6. Порядок оформления и предъявления заказчику результатов работ</p>
                <p className="no-m i2">Работы по созданию САТ сдаются Разработчиком поэтапно в соответствии с календарным планом Проекта. По окончании каждого из этапов работ Разработчик сдает Заказчику соответствующие отчетные документы этапа.</p>

                <p className="no-m b">2. Назначение и цели создания системы</p>
                <p className="no-m i1 b">2.1. Назначение системы</p>
                <p className="no-m i2">ИС предназначена для упрощения процесса трудоустройства и максимизации эффективности использования располагаемого времени.</p>
                <p className="no-m i1 b">2.2. Цели создания системы</p>
                <p className="no-m i2">• Повышение эффективности работы биржи труда.<br/>• Сокращение времени необходимого на создание персонального резюме.<br/>• Сокращение времени необходимого на поиск работы.</p>

                <p className="no-m b">3. Характеристика объекта автоматизации</p>
                <p className="no-m i1 b">3.1. Краткие сведения об объекте автоматизации</p>
                <p className="no-m i2">Объектом автоматизации является биржа труда.</p>
                <p className="no-m i1 b">3.2. Сведения об условиях эксплуатации объекта автоматизации</p>
                <p className="no-m i2">ИС используется посетителями онлайн биржи труда.</p>

                <p className="no-m b">4. Требования к системе</p>
                <p className="no-m i1 b">4.1. Требования к системе в целом</p>
                <p className="no-m i2 b">4.1.1. Требования к структуре и функционированию системы</p>
                <p className="no-m i3">• Система САТ должна быть централизованной, т.е. все данные должны располагаться в центральном хранилище.<br/>• Удаленная регистрация пользователей.<br/>• Функциональный редактор резюме.<br/>•	Современные методы поиска информации.</p>
                <p className="no-m i2 b">4.1.2. Требования к численности и квалификации персонала системы и режиму его работы</p>
                <p className="no-m i3 b">4.1.2.1. Требования к численности персонала</p>
                <p className="no-m i4">В состав персонала, управляющим проектом, входят:<br/>• Руководитель проекта;<br/>• Начальники отделов – 3 человека;<br/>• Front-end и Back-end разработчики – 5 человек;<br/>• Дизайнеры – 3 человека;<br/>• Разработчики базы данных – 2 человека;<br/>• Бизнес-аналитики – 2 человека;<br/>• Сотрудники службы поддержки – 15 человек.<br/></p>
                <p className="no-m i3 b">4.1.2.2. Требования к квалификации персонала</p>
                <p className="no-m i4">• Конечный пользователь - знание соответствующей предметной области; знание основ многомерного анализа; знания и навыки работы с аналитическими приложениями;<br/>• Администратор подсистемы хранения данных - глубокие знания СУБД; знание архитектуры «Звезда» и «Снежинка»; опыт администрирования СУБД; знание и навыки операций архивирования и восстановления данных; знание и навыки оптимизации работы СУБД;<br/>• Front-end и Back-end разработчики – глубокие знания и опыт работы с фреймворками React и Express; опыт работы с коммерческими проектами; навык работы в команде.</p>
                <p className="no-m i3 b">4.1.2.3. Требования к режимам работы персонала</p>
                <p className="no-m i4">• Конечный пользователь - в соответствии с основным рабочим графиком подразделений Заказчика.<br/>• Администратор подсистемы хранения данных – двухсменный график, поочередно.<br/>•	Front-end и Back-end разработчики – двухсменный график, поочередно.</p>
                <p className="no-m i2 b">4.1.3. Перспективы системы, модернизация системы</p>
                <p className="no-m i4">Модернизация системы может происходить в двух направлениях: модернизация программного обеспечения и модернизация аппаратного обеспечения комплекса.<br/>При модернизации программного обеспечения могут вноситься изменения или осуществляться дополнения в необходимые для функционирования программной системы (например, при введении новой задачи), а также могут обновляться до актуальных версий программные средства.</p>
                <p className="no-m i2 b">4.1.4. Требования к надежности</p>
                <p className="no-m i4">Необходимо, чтобы система обладала устойчивостью к отказам оборудования и программных систем, а также электропитания. Для надежной работы комплекса необходимы высоконадежные аппаратные и программные системы.</p>
                <p className="no-m i2 b">4.1.5. Требования к информационной безопасности</p>
                <p className="no-m i4">Обеспечение информационное безопасности Системы КХД должно удовлетворять следующим требованиям:<br/>• Защита Системы должна обеспечиваться комплексом программно-технических средств и поддерживающих их организационных мер.<br/>• Защита Системы должна обеспечиваться на всех технологических этапах обработки информации и во всех режимах функционирования, в том числе при проведении ремонтных и регламентных работ.<br/>• Программно-технические средства защиты не должны существенно ухудшать основные функциональные характеристики Системы (надежность, быстродействие, возможность изменения конфигурации).<br/>• Разграничение прав доступа пользователей и администраторов Системы должно строиться по принципу "что не разрешено, то запрещено".</p>
                <p className="no-m i2 b">4.1.6. Требования по сохранности информации</p>
                <p className="no-m i4">Сохранность информации должна быть обеспечена в следующих случаях:<br/>• Выход из строя аппаратных систем комплекса;<br/>• Стихийные бедствия (пожар, наводнение, взрыв, землетрясение и т.п.);<br/>• Хищение носителей информации, других систем комплекса;<br/>• Ошибки в программных средствах;<br/>• Неверные действия сотрудников.</p>
                <p className="no-m i1 b">4.2. Требования к задачам, выполняемым системой</p>
                <p className="no-m i2 b">4.2.1. Перечень функций, подлежащих автоматизации</p>
                <p className="no-m i3">• Система заполнения базы данных объектами.<br/>• Система получения данных о пользователе.<br/>•	Система составления персонального резюме.<br/>•	Система поиска информации о свободных вакансиях.</p>
                <p className="no-m i1 b">4.3. Требования к видам обеспечения</p>
                <p className="no-m i2 b">4.3.1. Требования к информационному обеспечению</p>
                <p className="no-m i3">Программное обеспечение должно обеспечивать работу следующих систем:<br/>• Cоставление резюме;<br/>• Проведение онлайн собеседования;<br/>•	Обмен файлами;<br/>• Поиск вакансий;<br/>• Просмотр информации о работодателе;<br/>• Просмотр отзывов о месте работы.</p>
                <p className="no-m i2 b">4.3.2. Требования к лингвистическому обеспечению</p>
                <p className="no-m i3">Шрифт ввода-вывода данных – кириллица;<br/>Язык пользовательского интерфейса – русский c возможностью перевода на английский;</p>
                <p className="no-m i2 b">4.3.3. Требования к техническому обеспечению</p>
                <p className="no-m i3">Для функционирования ИС необходима локальная вычислительная сеть пропускной способностью 100Мбит/с. Сервер должен удовлетворять следующим минимальным требованиям:<br/>•	Процессор Intel Celeron 3ГГц<br/>• Жесткий диск 500GB<br/>• Объем ОЗУ 2ГБ<br/>•	Ethernet 1Гбит</p>

                <p className="no-m b">5. Состав и содержание работ по созданию систему</p>
                <p className="no-m i1">Перечень документов, предъявляемых по окончании соответствующих стадий по созданию системы, а также календарный план их сдачи представлен в таблице 1.</p>
                <table className="tz-table i1">
                    <thead>
                        <tr>
                            <td>Наименование стадии</td>
                            <td>Срок выполнения</td>
                            <td>Результат работ</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Проектирование. Разработка технического проекта</td>
                            <td>12.02.2020 – 01.03.2020</td>
                            <td>Описание проекта в целом. Описание всех подсистем</td>
                        </tr>
                        <tr>
                            <td>Разработка проектных решений</td>
                            <td>02.03.2020 – 01.04.2020</td>
                            <td>Разработанные частные программные решения.</td>
                        </tr>
                        <tr>
                            <td>Разработка рабочей документации</td>
                            <td>02.04.2020 – 01.05.2020</td>
                            <td>Первая готовая версия проекта. Руководство пользователя</td>
                        </tr>
                        <tr>
                            <td>Ввод в действие системы</td>
                            <td>02.05.2020 – 15.05.2020</td>
                            <td>Протестированная версия проекта. Устранение всех неполадок. Доведение всех систем до конца.</td>
                        </tr>
                    </tbody>
                </table>
                <p className="no-m text-center">Таблица 1- План работ по созданию проекта</p>

                <p className="no-m b">6. Порядок контроля и приемки системы</p>
                <p className="no-m i1">Установить контроль и приемку результатов работ на каждой стадии создания системы в соответствии с разделом 5.<br/>На стадии 3 принимается готовая версия программного продукта (модель).
                Остальные результаты работ передаются в виде документов (согласно табл. 4.1).
                <br/>Приемка этапа заключается в рассмотрении и оценке проведенного объема работ и предъявленной технической документации в соответствии с требованиями настоящего технического задания.<br/>Ответственность за организацию и проведение приемки системы должен нести заказчик. Приемка системы должна производиться по завершению приемки всех задач системы. При этом необходимо предоставить обеспечение материальной частью (технические средства), проектной документацией и специально выделенным персоналом.<br/>Заказчик должен предъявлять систему ведомственной приемочной комиссии, при этом он обязан обеспечить нормальные условия работы данной комиссии в соответствии с принятой программой приемки.<br/>Завершающим этапом при приемке системы должно быть составление акта приемки.</p>

                <p className="no-m b">7. Требования к составу и содержанию работ по подготовке объекта автоматизации к вводу системы в действие</p>
                <p className="no-m i1">Для обеспечения готовности объекта к вводу системы в действие провести комплекс мероприятий:<br/>• приобрести компоненты технического и программного обеспечения, заключить договора на их лицензионное использование;<br/>•	завершить работы по установке технических средств;<br/>• провести обучение пользователей.</p>

                <p className="no-m b">8. Требования к документированию</p>
                <p className="no-m i1">Проектная документация должна быть разработана в соответствии с ГОСТ 34.201-89 и ГОСТ ЕСПД.<br/>Вся документация должна быть подготовлена и передана как в печатном, так и в электронном виде (в формате Microsoft Word).</p>
                
        
                <div className="d-flex justify-content-between mt-5">
                    <Link to="/systems-project/razdel-3/glava-3"><button type="button" className="btn btn-outline-primary">Предыдущая</button></Link>
                    <Link to="/systems-project/zakluchenie"><button type="button" className="btn btn-outline-primary">Следующая</button></Link>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        document.getElementById('menu-tz').classList.remove('active');
    }

    componentDidMount() {
        document.getElementById('menu-tz').classList.add('active');
    }
}

export default R4;