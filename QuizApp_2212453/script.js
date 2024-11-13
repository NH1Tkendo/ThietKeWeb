const questions = [
    {
        question: "WWW là viết tắt của?",
        answers: [
            { text: "Wordl Wide Wed", correct: false},
            { text: "World Wide Web", correct: true},
            { text: "Word Wide Web", correct: false},
            { text: "Word Wibe Web", correct: false},
        ]
    },
    {
        question: "URL là gì?",
        answers: [
            { text: "Một giao thức trong Internet", correct: false },
            { text: "Xác định tên của một máy tính trên mạng", correct: false },
            { text: "Định vị một tài nguyên cụ thể trên web", correct: true },
            { text: "Một chuẩn trong truyền dữ liệu trên web", correct: false }
        ]
    },
    {
        question: "The Web is an information system where documents and other web resources are identified by Uniform Resource Locators (URLs, such as https://example.com/), which may be interlinked by ________, and are accessible over the Internet.",
        answers: [
            { text: "URL", correct: false },
            { text: "pages", correct: false },
            { text: "computers", correct: false },
            { text: "hyperlinks", correct: true }
        ]
    },
    {
        question: "HTML là viết tắt của?",
        answers: [
            { text: "HyperText Makeup Language", correct: false },
            { text: "HTTP Technology Model Language", correct: false },
            { text: "HyperText Markup Language", correct: true },
            { text: "HyperTest Makeup Language", correct: false }
        ]
    },
    {
        question: "Trình duyệt web là một ứng dụng phần mềm để truy cập thông tin trên World Wide Web. Mỗi trang web, hình ảnh và video riêng lẻ được xác định bằng một _________ riêng biệt, cho phép các trình duyệt truy xuất và hiển thị chúng trên thiết bị của người dùng.",
        answers: [
            { text: "công nghệ", correct: false },
            { text: "mã HTML", correct: false },
            { text: "liên kết", correct: false },
            { text: "URL", correct: true }
        ]
    },
    {
        question: "Trình duyệt web đầu tiên do ai tạo ra?",
        answers: [
            { text: "Steve Jobs", correct: false },
            { text: "Tim Berners-Lee", correct: true },
            { text: "Bill Gates", correct: false },
            { text: "Chrome", correct: false }
        ]
    },
    {
        question: "Có thể sử dụng trình duyệt web để?",
        answers: [
            { text: "Xem nội dung trang web", correct: false },
            { text: "Hỗ trợ quá trình thiết kế giao diện", correct: false },
            { text: "Giúp tìm và sửa lỗi trong quá trình phát triển web", correct: false },
            { text: "Cả A, B, và C", correct: true }
        ]
    },
    {
        question: "A web browser (commonly referred to as a browser or internet browser) is an _________ for accessing the World Wide Web.",
        answers: [
            { text: "application software", correct: true },
            { text: "operating system", correct: false },
            { text: "library", correct: false },
            { text: "framework", correct: false }
        ]
    },
    {
        question: "Mã nguồn trang web, khi trình duyệt nhận về từ web server có thể gồm?",
        answers: [
            { text: "HTML, CSS, PHP, JavaScript", correct: true },
            { text: "HTML, CSS, C#", correct: false },
            { text: "CSS, C#, SQL", correct: false },
            { text: "CSS, JavaScript, HTML", correct: false }
        ]
    },
    {
        question: "Một số kết quả trung gian được tạo ra khi trình duyệt hiển thị trang web là gì?",
        answers: [
            { text: "DOM, CSSOM, Trang web kết quả, HTML", correct: false },
            { text: "CSS, DOM, Trang web kết quả, DOM Tree", correct: false },
            { text: "DOM tree, CSSOM, Trang web kết quả, Render tree", correct: true },
            { text: "CSSOM, DOM tree, OOP, Render tree", correct: false }
        ]
    },
    {
        question: "CSSOM là viết tắt của?",
        answers: [
            { text: "CSS Object Modern", correct: false },
            { text: "CSS Oriented Model", correct: false },
            { text: "CSS Object Mode", correct: false },
            { text: "CSS Object Model", correct: true }
        ]
    },
    {
        question: "A Uniform Resource Locator (URL) is a reference to a web resource that specifies its location on a computer network and a _______ for retrieving it.",
        answers: [
            { text: "address", correct: false },
            { text: "channel", correct: false },
            { text: "format", correct: false },
            { text: "mechanism", correct: true }
        ]
    },
    {
        question: "Các thành phần thường có trong một URL gồm?",
        answers: [
            { text: "schema, fragment_id, query_string, path, port, domain", correct: false },
            { text: "scheme, fragment_id, query_string, path, socket, domain", correct: false },
            { text: "scheme, fragment_id, query_string, path, port, domain", correct: true },
            { text: "scheme, fragment_id, query_language, path, port, domain", correct: false }
        ]
    },
    {
        question: "Khi mở tập tin C:\\index.html bằng trình duyệt, giao thức trình duyệt đã sử dụng trong URL là?",
        answers: [
            { text: "http", correct: false },
            { text: "https", correct: false },
            { text: "file", correct: true },
            { text: "ftp", correct: false }
        ]
    },
    {
        question: "Khi mở tập tin C:\\index.html bằng trình duyệt, tại sao lại có ba dấu xuyệt (///) liền nhau?",
        answers: [
            { text: "Là cú pháp để truy cập tập tin trên máy cục bộ", correct: true },
            { text: "Do lược bỏ tên của máy tính (localhost)", correct: false },
            { text: "Là chuẩn của giao thức FTP", correct: false },
            { text: "Là chuẩn của giao tiếp SSL", correct: false }
        ]
    },
    {
        question: "In computing, a hyperlink, or simply a link, is a ___________ to data that the user can follow by clicking or tapping. A hyperlink points to a whole document or to a specific element within a document.",
        answers: [
            { text: "reference", correct: true },
            { text: "format", correct: false },
            { text: "following", correct: false },
            { text: "calling", correct: false }
        ]
    },
    {
        question: "Hypertext is _______displayed on a computer display or other electronic devices with references (hyperlinks) to other text that the reader can immediately access.",
        answers: [
            { text: "link", correct: false },
            { text: "text", correct: true },
            { text: "format", correct: false },
            { text: "web", correct: false }
        ]
    },
    {
        question: "A static web page (sometimes called a flat page or a stationary page) is a web page that is delivered to the user's web browser exactly as stored, in contrast to __________ which are generated by a web application.",
        answers: [
            { text: "dynamic web pages", correct: true },
            { text: "web root", correct: false },
            { text: "Internet", correct: false },
            { text: "database", correct: false }
        ]
    },
    {
        question: "Một phần tử HTML (thông thường) gồm các thành phần sau:",
        answers: [
            { text: "thẻ mở, thẻ đóng", correct: false },
            { text: "thẻ mở, nội dung", correct: false },
            { text: "thẻ mở, nội dung, thẻ đóng", correct: true },
            { text: "thẻ đóng, nội dung", correct: false }
        ]
    },
    {
        question: "Cấu trúc cơ bản của một tài liệu HTML gồm:",
        answers: [
            { text: "Phần khai báo (doctype), phần tử html, phần tử head, phần tử title, phần tử body", correct: true },
            { text: "Phần khai báo (doctype), phần tử html, phần tử header, phần tử title, phần tử body", correct: false },
            { text: "Phần khai báo (doctype), phần tử html, phần tử head, phần tử link, phần tử body", correct: false },
            { text: "Phần khai báo (doctype), phần tử html, phần tử p, phần tử title, phần tử body", correct: false }
        ]
    },
    {
        question: "Phát biểu nào sau đây là hợp lý:",
        answers: [
            { text: "HTML tạo ra cấu trúc và ngữ nghĩa cho phần nội dung trang web", correct: true },
            { text: "HTML thực hiện việc trang trí cho trang web", correct: false },
            { text: "HTML xử lý các tương tác của người dùng trên giao diện web", correct: false },
            { text: "HTML vừa tạo ra phần nội dung vừa thực hiện trang trí cho trang web", correct: false }
        ]
    },
    {
        question: "Phát biểu nào đúng khi nói về “<!DOCTYPE html>”?",
        answers: [
            { text: "Là một thẻ HTML", correct: false },
            { text: "Là một khai báo trong tài liệu HTML", correct: true },
            { text: "Là một phần tử HTML", correct: false },
            { text: "Là một chú thích trong HTML", correct: false }
        ]
    },
    {
        question: "Trong UTF-8, UTF là viết tắt của các từ nào?",
        answers: [
            { text: "Uniform Text Format", correct: false },
            { text: "Unicode Transformation Format", correct: true },
            { text: "Uniform Transformation Format", correct: false },
            { text: "Unicode Text Format", correct: false }
        ]
    },
    {
        question: "Metadata is \"data that provides ________about other data\". In other words, it is \"data about data\".",
        answers: [
            { text: "format", correct: false },
            { text: "information", correct: true },
            { text: "structure", correct: false },
            { text: "standard", correct: false }
        ]
    },
    {
        question: "Technically, an ________ is the collection of start tag, its attributes, an end tag and everything in between.",
        answers: [
            { text: "HTML attribute", correct: false },
            { text: "HTML tag", correct: false },
            { text: "HTML document", correct: false },
            { text: "HTML element", correct: true }
        ]
    },
    {
        question: "Indicate whether each of these filenames is not an acceptable name for a web document.",
        answers: [
            { text: "Sunflower.html", correct: false },
            { text: "index.htm", correct: false },
            { text: "Song_Lyrics.html", correct: false },
            { text: "cooking home page.html", correct: true }
        ]
    },
    {
        question: "One of the following markup examples is incorrect. Which one?",
        answers: [
            { text: "<img src = 'birthday.jpg'>", correct: false },
            { text: "<em>Congratulations!<em>", correct: true },
            { text: "<a href='file.html'>linked text</a>", correct: false },
            { text: "<p>This is a new paragraph</p>", correct: false }
        ]
    },
    {
        question: "Trang web https://validator.w3.org/ dùng để làm gì?",
        answers: [
            { text: "Để hiển thị tài liệu của W3C", correct: false },
            { text: "Để chạy mã nguồn HTML và cho ra kết quả", correct: false },
            { text: "Để kiểm tra tính hợp lệ của mã HTML", correct: true },
            { text: "Để đăng ký tên miền cho trang web", correct: false }
        ]
    },
    {
        question: "Trong HTML, chữ 'hr' trong phần tử hr là viết tắt của chữ nào?",
        answers: [
            { text: "Horizontal Ruler", correct: false },
            { text: "Header", correct: false },
            { text: "Heading ruler", correct: false },
            { text: "Horizontal Rule", correct: true }
        ]
    },
    {
        question: "Trong HTML, chữ 'pre' trong phần tử pre là viết tắt của chữ nào?",
        answers: [
            { text: "Preferred text", correct: false },
            { text: "Preformatted text", correct: true },
            { text: "Previous text", correct: false },
            { text: "Part reference", correct: false }
        ]
    },
    {
        question: "Trong HTML, chữ ‘dl’ trong phần tử dl là viết tắt của chữ nào?",
        answers: [
            { text: "Document list", correct: false },
            { text: "Data list", correct: false },
            { text: "Description list", correct: true },
            { text: "Data link", correct: false }
        ]
    },
    {
        question: "Trong HTML, chữ ‘ul’ trong phần tử ul là viết tắt của chữ nào?",
        answers: [
            { text: "unordered list", correct: true },
            { text: "unorder list", correct: false },
            { text: "unordered line", correct: false },
            { text: "under list", correct: false }
        ]
    },
    {
        question: "Trong HTML, chữ ‘ol’ trong phần tử ol là viết tắt của chữ nào?",
        answers: [
            { text: "over list", correct: false },
            { text: "over line", correct: false },
            { text: "ordered list", correct: true },
            { text: "order list", correct: false }
        ]
    },
    {
        question: "The content inside the ______ element should be unique to the document.",
        answers: [
            { text: "main", correct: true },
            { text: "article", correct: false },
            { text: "section", correct: false },
            { text: "header", correct: false }
        ]
    },
    {
        question: "The ______ element represents a container for introductory content or a set of navigational links.",
        answers: [
            { text: "head", correct: false },
            { text: "footer", correct: false },
            { text: "header", correct: true },
            { text: "article", correct: false }
        ]
    },
    {
        question: "The _______ element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable.",
        answers: [
            { text: "aside", correct: false },
            { text: "main", correct: false },
            { text: "section", correct: false },
            { text: "article", correct: true }
        ]
    },
    {
        question: "The ______ element identifies content that is separate from, but tangentially related to, the surrounding content.",
        answers: [
            { text: "main", correct: false },
            { text: "aside", correct: true },
            { text: "section", correct: false },
            { text: "article", correct: false }
        ]
    },
    {
        question: "The ______ element is used to create an area for contact information for the author or maintainer of the document.",
        answers: [
            { text: "footer", correct: false },
            { text: "header", correct: false },
            { text: "aside", correct: false },
            { text: "address", correct: true }
        ]
    },
    {
        question: "Các loại phần mềm dùng để viết mã trong làm web gồm?",
        answers: [
            { text: "Text editor, Microsoft Word, IDE, Web browser", correct: false },
            { text: "Text editor, Code editor, Web browser, Acrobat", correct: false },
            { text: "Mspaint, Web browser, Code editor, IDE", correct: false },
            { text: "Web browser, Text editor, Code editor, IDE", correct: true }
        ]
    },
    {
        question: "Phát biểu nào sau đây là đúng?",
        answers: [
            { text: "IDE thường có dung lượng lớn hơn code editor", correct: true },
            { text: "Không thể dịch mã chương trình bằng IDE", correct: false },
            { text: "Tất cả IDE đều là phần mềm có phí", correct: false },
            { text: "VS code là một IDE", correct: false }
        ]
    },
    {
        question: "______ is the software that is designed specifically to help developers in coding.",
        answers: [
            { text: "Debugger", correct: false },
            { text: "Text editor", correct: false },
            { text: "Code editor", correct: true },
            { text: "IDE", correct: false }
        ]
    },
    {
        question: "_____ is a software application that provides comprehensive facilities to computer programmers for software development.",
        answers: [
            { text: "IDE", correct: true },
            { text: "Code editor", correct: false },
            { text: "Debugger", correct: false },
            { text: "Compiler", correct: false }
        ]
    },
    {
        question: "Trong các phần mềm lập trình, IntelliSense là gì?",
        answers: [
            { text: "Là thành phần bổ sung của công ty Intell", correct: false },
            { text: "Là thành phần dịch mã lệnh", correct: false },
            { text: "Là chương trình gỡ lỗi", correct: false },
            { text: "Là thành phần đưa ra các mô tả ngắn hoặc gợi ý khi viết mã nguồn", correct: true }
        ]
    },
    {
        question: "Phần tử HTML nào sau đây không phải là phần tử kiểu inline?",
        answers: [
            { text: "small", correct: false },
            { text: "p", correct: true },
            { text: "strong", correct: false },
            { text: "a", correct: false }
        ]
    },
    {
        question: "Phát biểu nào sau đây không đúng, khi nói về phần tử HTML trung tính (generic element)",
        answers: [
            { text: "Phần tử trung tính có ngữ nghĩa rõ ràng, cụ thể", correct: true },
            { text: "div và span là hai phần tử trung tính", correct: false },
            { text: "div là phần tử trung tính kiểu khối", correct: false },
            { text: "Khi không thể tìm được phần tử có ngữ nghĩa thì mới lựa chọn phần tử trung tính", correct: false }
        ]
    },
    {
        question: "Trong HTML, ARIA dùng để làm gì?",
        answers: [
            { text: "Là một loại phông chữ", correct: false },
            { text: "Là một bộ các thuộc tính, được sử dụng để hỗ trợ quá trình điều hướng, tương tác với trang web.", correct: true },
            { text: "Là một phần tử, dùng để nhúng âm thanh vào trang web", correct: false },
            { text: "Là một phần tử, dùng để nhúng video vào trang web", correct: false }
        ]
    },
    {
        question: "Để hiển thị kí hiệu bản quyền (copyright sign) ra ngoài giao diện, mã HTML sẽ là:",
        answers: [
            { text: "&copyright;", correct: false },
            { text: "copyright;", correct: false },
            { text: "&copy;", correct: true },
            { text: "&copy", correct: false }
        ]
    },
    {
        question: "Để hiển thị thêm các khoảng trắng (nonbreaking space) ra ngoài giao diện, mã HTML sẽ là:",
        answers: [
            { text: "&space;", correct: false },
            { text: "&space", correct: false },
            { text: "&nbsp", correct: false },
            { text: "&nbsp;", correct: true }
        ]
    },
    {
        question: "Trang web là thành phần để tạo ra website, ứng dụng web",
        answers: [
            { text: "Trang web là thành phần để tạo ra website, ứng dụng web", correct: false },
            { text: "Với người dùng, rất khó để phân biệt giữa website và ứng dụng web", correct: false },
            { text: "Mã nguồn của một trang web, luôn có phần mở rộng là .html", correct: true },
            { text: "Để tạo ra một ứng dụng web, bạn luôn phải sử dụng nhiều ngôn ngữ khác nhau", correct: false }
        ]
    },
    {
        question: "Ý nghĩa của 2 dấu chấm (..), trong lệnh `<a href=\"../index.html\">Quay về trang chủ</a>` là gì?",
        answers: [
            { text: "Trở về thư mục gốc", correct: false },
            { text: "Trở về thư mục cha", correct: true },
            { text: "Quay về trang chủ", correct: false },
            { text: "Đi xuống thư mục con", correct: false }
        ]
    },
    {
        question: "Dấu thăng (#) trong lệnh `<a href=\"thuat-ngu.html#start-h\">H</a>` mang ý nghĩa gì?",
        answers: [
            { text: "Liên kết tới vị trí có class=\"start-h\" trong mã nguồn", correct: false },
            { text: "Trở về đầu trang web", correct: false },
            { text: "Đi tới cuối trang web", correct: false },
            { text: "Liên kết tới vị trí có id=\"start-h\" trong mã nguồn", correct: true }
        ]
    },
    {
        question: "Hyperlinks allow us to link ______ to other ______ or resources, link to specific parts of _______, or make apps available at a web address.",
        answers: [
            { text: "documents", correct: true },
            { text: "web", correct: false },
            { text: "languages", correct: false },
            { text: "tags", correct: false }
        ]
    },
    {
        question: "Phát biểu nào không đúng, khi nói về phần tử img?",
        answers: [
            { text: "Img là phần tử kiểu inline", correct: false },
            { text: "src và alt là 2 thuộc tính bắt buộc phải có", correct: false },
            { text: "Trong mọi trường hợp, bạn nên thiết lập sẵn kích thước cố định cho ảnh", correct: true },
            { text: "Bạn có thể sử dụng tính chất cache hình ảnh của trình duyệt, để tăng tốc độ hiển thị trang web.", correct: false }
        ]
    },
    {
        question: "Trong thuật ngữ 'ảnh SVG', từ SVG là viết tắt của?",
        answers: [
            { text: "Satify Vector Graphics", correct: false },
            { text: "Static Vector Graphics", correct: false },
            { text: "Scalable Vector Graphics", correct: true },
            { text: "Scalable Vertical Graphics", correct: false }
        ]
    },
    {
        question: "Trong phần hiển thị ảnh SVG, có nói tới kĩ thuật “fallbacks”, nó là cái gì?",
        answers: [
            { text: "Là kĩ thuật làm mờ ảnh", correct: false },
            { text: "Là kĩ thuật làm rõ ảnh", correct: false },
            { text: "Là kĩ thuật “cache ảnh” trong trình duyệt", correct: false },
            { text: "Là giải pháp dự phòng, trong trường hợp không tải được ảnh SVG", correct: true }
        ]
    },
    {
        question: "Responsive web design is a type of web design that allows web pages to __(1)___ to the screen size of the device that they are being viewed on.",
        answers: [
            { text: "(1) adapt, (2) HTML document", correct: false },
            { text: "(1) display, (2) HTML document", correct: false },
            { text: "(1) disappear, (2) colors", correct: false },
            { text: "(1) adapt, (2) layout and content", correct: true }
        ]
    },
    {
        question: "How do you create a header cell?",
        answers: [
            { text: "Using <tr> tag", correct: false },
            { text: "Using <thead> tag", correct: false },
            { text: "Using <th> tag", correct: true },
            { text: "Using <td> tag", correct: false }
        ]
    },
    {
        question: "The _____ tag defines a standard data cell in an HTML table.",
        answers: [
            { text: "<tr>", correct: false },
            { text: "<th>", correct: false },
            { text: "<dc>", correct: false },
            { text: "<td>", correct: true }
        ]
    },
    {
        question: "The colspan _____ defines the number of columns a cell should span.",
        answers: [
            { text: "attribute", correct: true },
            { text: "tag", correct: false },
            { text: "element", correct: false },
            { text: "document", correct: false }
        ]
    },
    {
        question: "The ____ tag is used to group header content in an HTML table.",
        answers: [
            { text: "<th>", correct: false },
            { text: "<tr>", correct: false },
            { text: "<td>", correct: false },
            { text: "<thead>", correct: true }
        ]
    },
    {
        question: "A webform, web form or HTML form on a web page allows a user to _____ that is sent to a server for processing.",
        answers: [
            { text: "download data", correct: false },
            { text: "create database", correct: false },
            { text: "markup database", correct: false },
            { text: "enter data", correct: true }
        ]
    },
    {
        question: "Trong quá trình mua hàng online, để người mua hàng lựa chọn hình thức thanh toán, sử dụng control nào là hợp lý nhất?",
        answers: [
            { text: "Checkbox", correct: false },
            { text: "Radio", correct: true },
            { text: "Textarea", correct: false },
            { text: "Button", correct: false }
        ]
    },
    {
        question: "Khi muốn lấy ý kiến đánh giá, bình luận về một sản phẩm từ người mua hàng, sử dụng control nào là hợp lý nhất?",
        answers: [
            { text: "Datalist", correct: false },
            { text: "Label", correct: false },
            { text: "Select", correct: false },
            { text: "Textarea", correct: true }
        ]
    },
    {
        question: "Khi làm việc với form, để không bị chuyển trang khi bấm nút submit, bạn có thể thiết lập giá trị cho action là:",
        answers: [
            { text: "%", correct: false },
            { text: "#", correct: true },
            { text: "@", correct: false },
            { text: "/", correct: false }
        ]
    },
    {
        question: "Trong form có chứa control `<input type=\"password\" name=\"mat-khau\" maxlength=\"8\" id=\"form-mat-khau\">`. Khi gửi form này về web server, mật khẩu của người dùng sẽ chứa trong thuộc tính nào?",
        answers: [
            { text: "type", correct: false },
            { text: "name", correct: true },
            { text: "maxlength", correct: false },
            { text: "id", correct: false }
        ]
    },
    {
        question: "Phần tử fieldset được sử dụng để nhóm các control có liên quan đến nhau, để chú thích cho nhóm các control này sử dụng phần tử nào?",
        answers: [
            { text: "label", correct: false },
            { text: "group", correct: false },
            { text: "textarea", correct: false },
            { text: "legend", correct: true }
        ]
    },
    {
        question: "The _____ HTML element represents a nested browsing context, embedding another HTML page into the current one.",
        answers: [
            { text: "<canvas>", correct: false },
            { text: "<iframe>", correct: true },
            { text: "<video>", correct: false },
            { text: "<object>", correct: false }
        ]
    },
    {
        question: "The HTML _____ element is used to draw graphics on a web page.",
        answers: [
            { text: "<iframe>", correct: false },
            { text: "<object>", correct: false },
            { text: "<video>", correct: false },
            { text: "<canvas>", correct: true }
        ]
    },
    {
        question: "The _____ tag defines a container for an external resource.",
        answers: [
            { text: "<canvas>", correct: false },
            { text: "<video>", correct: false },
            { text: "<object>", correct: true },
            { text: "<iframe>", correct: false }
        ]
    },
    {
        question: "CSS là viết tắt của các từ nào?",
        answers: [
            { text: "Code Style Sheets", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Cascading Style Source", correct: false },
            { text: "Code Style Source", correct: false }
        ]
    },
    {
        question: "Quan sát đoạn mã `p { color: red; font-size: 54px; }`, phát biểu nào sau đây không đúng?",
        answers: [
            { text: "p là bộ chọn (selector)", correct: false },
            { text: "Đoạn mã trên là một chỉ dẫn định dạng (style rule)", correct: false },
            { text: "color là thuộc tính (property)", correct: false },
            { text: "Đoạn mã trên là một khai báo (declaration)", correct: true }
        ]
    },
    {
        question: "Bạn có thể viết mã CSS ở đâu? Phát biểu nào sau đây không đúng?",
        answers: [
            { text: "Viết ở trong phần tử HTML, sử dụng thuộc tính style", correct: false },
            { text: "Viết ở ngoài tài liệu HTML, trong tập tin .css, sử dụng phần tử link để liên kết", correct: false },
            { text: "Viết ở trong tài liệu HTML, sử dụng phần tử <script>", correct: true },
            { text: "Viết ở trong tài liệu HTML, sử dụng phần tử <style>", correct: false }
        ]
    },
    {
        question: "Theo kĩ thuật xếp lớp (cascading) trong CSS, loại mã CSS nào có độ ưu tiên cao nhất?",
        answers: [
            { text: "User agent style sheet", correct: false },
            { text: "User style sheet", correct: false },
            { text: "Author style sheet", correct: true },
            { text: "Cả ba có độ ưu tiên như nhau", correct: false }
        ]
    },
    {
        question: "Khi áp dụng đoạn mã CSS sau, văn bản p có màu gì? \n`<style> p { color: purple; } p { color: green; } p { color: gray; } </style>`",
        answers: [
            { text: "Tím", correct: false },
            { text: "Xanh", correct: false },
            { text: "Xám", correct: true },
            { text: "Trắng", correct: false }
        ]
    },
    {
        question: "Trong các phương pháp để định chuẩn CSS (normalize CSS, reset CSS), cách nào sau đây không đúng?",
        answers: [
            { text: "Dùng tập tin normalize.css", correct: false },
            { text: "Dùng bộ mã reset CSS của Eric Meyer", correct: false },
            { text: "Dùng bộ mã định chuẩn CSS của Bootstraps", correct: true },
            { text: "Dùng lệnh Reset của CSS", correct: false }
        ]
    },
    {
        question: "In CSS, the term _____ is used when talking about design and layout. The CSS ______ is essentially a box that wraps around every HTML element.",
        answers: [
            { text: "border", correct: false },
            { text: "cascading", correct: false },
            { text: "box mode", correct: false },
            { text: "box model", correct: true }
        ]
    },
    {
        question: "Trong CSS, đơn vị đo nào sau đây không phải là đơn vị đo tương đối (relative)?",
        answers: [
            { text: "em", correct: false },
            { text: "rem", correct: false },
            { text: "%", correct: false },
            { text: "px", correct: true }
        ]
    },
    {
        question: "Trong CSS, với khai báo: `font-family: Verdana, Arial, Helvetica, sans-serif;` Phông chữ nào có độ ưu tiên cao nhất.",
        answers: [
            { text: "Arial", correct: false },
            { text: "Verdana", correct: true },
            { text: "Helvetica", correct: false },
            { text: "sans-serif", correct: false }
        ]
    },
    {
        question: "Một số loại phông chữ phổ biến trong CSS gồm:",
        answers: [
            { text: "serif, sans-serif, monospace, cursive, fantasy", correct: true },
            { text: "serif, sans-serif, arrial, cursive, fantasy", correct: false },
            { text: "font-family, sans-serif, monospace, cursive, fantasy", correct: false },
            { text: "serif, sans-serif, monospace, roboto, fantasy", correct: false }
        ]
    },
    {
        question: "Cái nào sau đây không phải là một chuẩn định dạng phông chữ?",
        answers: [
            { text: "OTF", correct: false },
            { text: "TTF", correct: false },
            { text: "WOFF2", correct: false },
            { text: "OOF", correct: true }
        ]
    },
    {
        question: "Trên máy người duyệt web, trình duyệt có thể lấy phông chữ từ đâu? Chỉ ra phát biểu sai.",
        answers: [
            { text: "Máy tính của người dùng", correct: false },
            { text: "Máy server cung cấp dịch vụ phông chữ", correct: false },
            { text: "Thư mục fonts trong website", correct: false },
            { text: "Máy tính của lập trình viên", correct: true }
        ]
    },
    {
        question: "______ is defined relative to the font size of the root element.",
        answers: [
            { text: "em", correct: false },
            { text: "rem", correct: true },
            { text: "%", correct: false },
            { text: "vw", correct: false }
        ]
    },
    {
        question: "Chỉ dẫn CSS nào sau đây bị lỗi:",
        answers: [
            { text: "h1 { font-size: 100%; }", correct: false },
            { text: "h1 { font-size: 20px; }", correct: false },
            { text: "h1 { font-size: 1.5rem; }", correct: false },
            { text: "h1 { font-size: 1.5 em; }", correct: true }
        ]
    },
    {
        question: "Trong CSS, muốn định dạng chữ nghiêng, sử dụng thuộc tính nào?",
        answers: [
            { text: "font-weight", correct: false },
            { text: "font-style", correct: true },
            { text: "font-variant", correct: false },
            { text: "font-size", correct: false }
        ]
    },
    {
        question: "Cỡ chữ của h1 là bao nhiêu px trong đoạn mã CSS sau:\n\n`html { font-size: 100%; } article { font-size: 0.875em } h1 { font-size: 1.5em; }`",
        answers: [
            { text: "16", correct: false },
            { text: "21", correct: true },
            { text: "14", correct: false },
            { text: "24", correct: false }
        ]
    },
    {
        question: "Muốn định dạng mọi phần tử div và h1 đều có chữ màu đỏ, dùng chỉ dẫn CSS nào?",
        answers: [
            { text: "div > h1 { color: red; }", correct: false },
            { text: "div ~ h1 { color: red; }", correct: false },
            { text: "div h1 { color: red; }", correct: false },
            { text: "div, h1 { color: red; }", correct: true }
        ]
    },
    {
        question: "Muốn định dạng mọi phần tử div và có thuộc tính class=\"intro\" có chữ màu đỏ, dùng chỉ dẫn CSS nào?",
        answers: [
            { text: "div > .intro { color: red; }", correct: false },
            { text: "div.intro { color: red; }", correct: true },
            { text: "div .intro { color: red; }", correct: false },
            { text: "div#intro { color: red; }", correct: false }
        ]
    },
    {
        question: "Muốn định dạng hàng đầu tiên của đoạn có chữ màu đỏ, dùng chỉ dẫn CSS nào?",
        answers: [
            { text: "p::first-line{ color: red; }", correct: true },
            { text: "p>first-line{ color: red; }", correct: false },
            { text: "p+first-line{ color: red; }", correct: false },
            { text: "p~first-line{ color: red; }", correct: false }
        ]
    },
    {
        question: "Để thiết lập khoảng lùi của hàng đầu tiên trong một đoạn, sử dụng thuộc tính nào?",
        answers: [
            { text: "line-height", correct: false },
            { text: "text-indent", correct: true },
            { text: "text-align", correct: false },
            { text: "text-decoration", correct: false }
        ]
    },
    {
        question: "Để thiết lập chiều cao tối thiểu của dòng chữ (line box), sử dụng thuộc tính nào?",
        answers: [
            { text: "text-shadow", correct: false },
            { text: "text-align", correct: false },
            { text: "text-transform", correct: false },
            { text: "line-height", correct: true }
        ]
    },
    {
        question: "Để bỏ đường gạch chân của các liên kết, sử dụng thuộc tính nào?",
        answers: [
            { text: "text-decoration", correct: true },
            { text: "word-spacing", correct: false },
            { text: "letter-spacing", correct: false },
            { text: "text-align", correct: false }
        ]
    },
    {
        question: "Để căn giữa (theo chiều ngang) một đoạn văn bản, sử dụng thuộc tính nào?",
        answers: [
            { text: "word-spacing", correct: false },
            { text: "text-transform", correct: false },
            { text: "text-align", correct: true },
            { text: "text-shadow", correct: false }
        ]
    },
    {
        question: "Để định dạng cách đánh số, đánh dấu đầu dòng cho một danh sách, sử dụng thuộc tính nào?",
        answers: [
            { text: "text-shadow", correct: false },
            { text: "list-style-type", correct: true },
            { text: "word-spacing", correct: false },
            { text: "text-decoration", correct: false }
        ]
    },
    {
        question: "Phần tử p sẽ có chữ màu gì, với chỉ dẫn CSS sau: `p { color: rgb(255, 0, 0); }`",
        answers: [
            { text: "Xanh lá cây (green)", correct: false },
            { text: "Xanh nước biển (blue)", correct: false },
            { text: "Trắng", correct: false },
            { text: "Đỏ", correct: true }
        ]
    },
    {
        question: "Chỉ dẫn CSS nào sau đây hợp lệ?",
        answers: [
            { text: "p { color: #4455GG; }", correct: false },
            { text: "p { color: rgba(255, 0, 255, .5); }", correct: true },
            { text: "p { color: rgb(255, 0, 256, .5); }", correct: false },
            { text: "p { color: rgb(255, 0, 256); }", correct: false }
        ]
    },
    {
        question: "Chỉ dẫn CSS nào sau đây không hợp lệ?",
        answers: [
            { text: "p { color: #4455FF; }", correct: false },
            { text: "p { color: rgba(255, 0, 255, 2); }", correct: true },
            { text: "p { color: rgba(255, 0, 254, .5); }", correct: false },
            { text: "p { color: rgb(0, 0, 0); }", correct: false }
        ]
    },
    {
        question: "Muốn giới hạn vùng nền chỉ gồm phần nội dung của phần tử, cần thiết lập giá trị cho thuộc tính background-clip là gì?",
        answers: [
            { text: "border-box", correct: false },
            { text: "none", correct: false },
            { text: "content-box", correct: true },
            { text: "padding-box", correct: false }
        ]
    },
    {
        question: "A _______ is a selector that selects elements that are in a specific state, e.g. they are the first element of their type, or they are being hovered over by the mouse pointer.",
        answers: [
            { text: "pseudo-element", correct: false },
            { text: "pseudo-class", correct: true },
            { text: "id", correct: false },
            { text: "class", correct: false }
        ]
    },
    {
        question: "In CSS, a _________ selector applies styles to parts of your document content in scenarios where there isn't a specific HTML element to select.",
        answers: [
            { text: "element", correct: false },
            { text: "pseudo-class", correct: false },
            { text: "id", correct: false },
            { text: "pseudo-element", correct: true }
        ]
    },
    {
        question: "Mã nguồn HTML có nhiều phần tử img, trong đó có 2 phần tử img với title có giá trị lần lượt là “con gà” và “vịt con”. Bạn chỉ muốn chọn ra 2 phần tử img này, bộ chọn nào dưới đây phù hợp?",
        answers: [
            { text: "img[title] {border: 3px solid;}", correct: false },
            { text: "img[title~=\"con\"] {border: 3px solid;}", correct: true },
            { text: "img[title|=\"con\"] {border: 3px solid;}", correct: false },
            { text: "img[title=\"con\"] {border: 3px solid;}", correct: false }
        ]
    },
    {
        question: "HTML có nhiều phần tử img, một số phần tử img có thuộc tính title. Để chọn các phần tử img với thuộc tính title đi kèm, bộ chọn nào phù hợp?",
        answers: [
            { text: "img[title] {border: 3px solid;}", correct: true },
            { text: "img[title~=*] {border: 3px solid;}", correct: false },
            { text: "img[title|=\"*\"] {border: 3px solid;}", correct: false },
            { text: "img[title=\"*\"] {border: 3px solid;}", correct: false }
        ]
    },
    {
        question: "The ………..CSS property sets the initial position for each background image.",
        answers: [
            { text: "background-clip", correct: false },
            { text: "background-repeat", correct: false },
            { text: "background-image", correct: false },
            { text: "background-position", correct: true }
        ]
    },
    {
        question: "The ……….property specifies an image to use as the background of an element.",
        answers: [
            { text: "background-image", correct: true },
            { text: "background-repeat", correct: false },
            { text: "background-attachment", correct: false },
            { text: "background-size", correct: false }
        ]
    },
    {
        question: "Trong tập tin CSS, khi muốn liên kết mã nguồn CSS ở các tập tin khác, sử dụng từ khóa nào?",
        answers: [
            { text: "link", correct: false },
            { text: "@import", correct: true },
            { text: "include", correct: false },
            { text: "using", correct: false }
        ]
    },
    {
        question: "The ………property sets whether a background image scrolls with the rest of the page, or is fixed.",
        answers: [
            { text: "background-image", correct: false },
            { text: "background-clip", correct: false },
            { text: "background-size", correct: false },
            { text: "background-attachment", correct: true }
        ]
    },
    {
        question: "Trong CSS, các thành phần của box model gồm:",
        answers: [
            { text: "box, margin area, border, padding area, inner edge, content area", correct: true },
            { text: "outer edge, model, border, padding area, inner edge, content area", correct: false },
            { text: "outer edge, margin area, radius, padding area, inner edge, content area", correct: false },
            { text: "outer edge, margin area, border, padding area, inner edge, content area", correct: false }
        ]
    },
    {
        question: "Thứ tự các giá trị của padding hợp lý là:",
        answers: [
            { text: "padding: right top bottom left;", correct: false },
            { text: "padding: top right bottom left;", correct: true },
            { text: "padding: top bottom right left;", correct: false },
            { text: "padding: left top right bottom;", correct: false }
        ]
    },
    {
        question: "Khi tạo bóng cho hộp bằng thuộc tính box-shadow, giá trị của …………….. là khoảng dịch của bóng sang phía phải so với hộp ban đầu, nếu giá trị này là âm, bóng sẽ được dịch sang phía trái.",
        answers: [
            { text: "vertical-offset", correct: false },
            { text: "blur distance", correct: false },
            { text: "spread distance", correct: false },
            { text: "horizontal-offset", correct: true }
        ]
    },
    {
        question: "Trong CSS, giá trị nào không thể thiết lập cho thuộc tính display?",
        answers: [
            { text: "block", correct: false },
            { text: "inline", correct: false },
            { text: "flex", correct: false },
            { text: "hidden", correct: true }
        ]
    }
]
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    };
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display ="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = 'You scored ${score} out of ${questions.length}!';
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();