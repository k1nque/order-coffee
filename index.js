let count = 1;
document.getElementsByClassName("add-button")[0]
    .addEventListener("click", e => {
        count++;
        let newFieldSet = document.createElement("fieldSet");
        newFieldSet.innerHTML =
        `        <h4 class=\"beverage-count\">Напиток №${count}</h4>\n` +
        "        <label class=\"field\">\n" +
        "          <span class=\"label-text\">Я буду</span>\n" +
        "          <select>\n" +
        "            <option value=\"espresso\">Эспрессо</option>\n" +
        "            <option value=\"capuccino\" selected>Капучино</option>\n" +
        "            <option value=\"cacao\">Какао</option>\n" +
        "          </select>\n" +
        "        </label>\n" +
        "        <div class=\"field\">\n" +
        "          <span class=\"checkbox-label\">Сделайте напиток на</span>\n" +
        "          <label class=\"checkbox-field\">\n" +
        "            <input type=\"radio\" name=\"milk\" value=\"usual\" checked />\n" +
        "            <span>обычном молоке</span>\n" +
        "          </label>\n" +
        "          <label class=\"checkbox-field\">\n" +
        "            <input type=\"radio\" name=\"milk\" value=\"no-fat\" />\n" +
        "            <span>обезжиренном молоке</span>\n" +
        "          </label>\n" +
        "          <label class=\"checkbox-field\">\n" +
        "            <input type=\"radio\" name=\"milk\" value=\"soy\" />\n" +
        "            <span>соевом молоке</span>\n" +
        "          </label>\n" +
        "          <label class=\"checkbox-field\">\n" +
        "            <input type=\"radio\" name=\"milk\" value=\"coconut\" />\n" +
        "            <span>кокосовом молоке</span>\n" +
        "          </label>\n" +
        "        </div>\n" +
        "        <div class=\"field\">\n" +
        "          <span class=\"checkbox-label\">Добавьте к напитку:</span>\n" +
        "          <label class=\"checkbox-field\">\n" +
        "            <input type=\"checkbox\" name=\"options\" value=\"whipped cream\" />\n" +
        "            <span>взбитых сливок</span>\n" +
        "          </label>\n" +
        "          <label class=\"checkbox-field\">\n" +
        "            <input type=\"checkbox\" name=\"options\" value=\"marshmallow\" />\n" +
        "            <span>зефирок</span>\n" +
        "          </label>\n" +
        "          <label class=\"checkbox-field\">\n" +
        "            <input type=\"checkbox\" name=\"options\" value=\"chocolate\" />\n" +
        "            <span>шоколад</span>\n" +
        "          </label>\n" +
        "          <label class=\"checkbox-field\">\n" +
        "            <input type=\"checkbox\" name=\"options\" value=\"cinnamon\" />\n" +
        "            <span>корицу</span>\n" +
        "          </label>\n" +
        "        </div>\n";
        const fieldSet = document.querySelectorAll('fieldset');
        newFieldSet.className = "beverage";
        fieldSet[fieldSet.length - 1].after(newFieldSet);
})