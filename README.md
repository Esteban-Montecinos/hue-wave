# HUE WAVE
Crea, Copia y Comparte Gradientes para Tailwind CSS

![huewave-pre](https://github.com/Esteban-Montecinos/hue-wave/assets/81337401/8c50d57f-9d8f-480f-a2d1-5efd7ced81af)

creado con Next.js

---

> [!NOTE] 
> Cómo Aportar:
>
> En el archivo `collections.js` que se encuentra en `src/constants` agrega tu gradiente favorito con el siguiente formato:

````
{title: "", gradientTw: "", gradientCSS: "", encode: "" },
````

> [!IMPORTANT]
>
> `title:` Nombre de tu gradiente, de preferencia no tenga más de 20 caracteres
>
> `gradientTw:` Copia la clase de Tailwind.
>
>`gradientCSS:` Copia el codigo CSS que se genera
>
> `encode:` Copia el código que se genera al compartir, sin la url `https://huewave.vercel.app/`

- Ejemplo:
````
{title: "Candy", gradientTw: "bg-gradient-to-bl from-pink-300 from-9% via-purple-300 via-33% to-indigo-400 to-68%", gradientCSS: "linear-gradient(to left bottom, #f9a8d4 9%, #d8b4fe 33%, #818cf8 68%)", encode: "bGluZWFyLWdyYWRpZW50KHRvIGxlZnQgYm90dG9tLCtiZy1ncmFkaWVudC10by1ibCsjZjlhOGQ0K2Zyb20tcGluay0zMDArI2Q4YjRmZSt2aWEtcHVycGxlLTMwMCsjODE4Y2Y4K3RvLWluZGlnby00MDArOSUrZnJvbS05JSszMyUrdmlhLTMzJSs2OCUrdG8tNjgl" },
````

---
