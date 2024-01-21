Get a modpack from our database, if it exists.

## Endpoint URL

`https://api.itsjusttriz.com/minecraft/get/{modpackId}`

### Request Parameters

-   <small>Do NOT include the `{}` in your parameters.</small>

| Parameter     | Description                 |
| ------------- | --------------------------- |
| `{modpackId}` | The modpack's ID goes here. |

### Query Parameters

| Parameter | Required? | Description                                                                                 |
| --------- | :-------: | ------------------------------------------------------------------------------------------- |
| `raw`     |    :x:    | Accepts `true` or `false`.<br/> If `true`, you'll get a JSON response. Otherwise, a string. |

## <h2 class="transparent-text">Example</h2>

!!! example

    ```
    https://api.itsjusttriz.com/minecraft/get/ftbone?raw=true
    ```

    <h3>Response <small>(_JSON_)</small></h3>

    === "Success"

        ```json
        {
            "code": 200,
            "message": "Found 1 document { FTB One }",
            "payload": {
                "id": "ftbone",
                "name": "FTB One",
                "launcher": "FTB App",
                "link": "https://feed-the-beast.com/modpack/97_ftb_one",
                "dev": "FTB Team",
                "type": "public_beta",
                "image": "https://apps.modpacks.ch/modpacks/art/93/logo.png"
            }
        }
        ```

    === "Fail"

        ```json
        {
            "code": 404,
            "message": "[ijt.api.ERROR] Invalid entry!",
            "payload": {}
        }
        ```

    <h3>Response <small>(_String_)</small></h3>

    === "Success"

        ```txt
        Found 1 document { FTB One }
        ```

    === "Fail"

        ```
        [ijt.api.ERROR] Invalid entry!
        ```
