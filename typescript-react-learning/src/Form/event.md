# AnimationEvent

CSS 动画。

# ChangeEvent

更改<input>,<select>和<textarea>element 的值。

# ClipboardEvent

使用复制、粘贴和剪切事件。

# CompositionEvent

由于用户间接输入文本而发生的事件（例如，根据浏览器和 PC 设置，如果您想在美式键盘上键入日语，则可能会出现带有附加字符的弹出窗口）

# DragEvent

与指针设备（例如鼠标）的拖放交互。

# FocusEvent

当元素获得或失去焦点时发生的事件。

# FormEvent

每当表单或表单元素获得/失去焦点、表单元素值更改或表单提交时发生的事件。

# InvalidEvent

当输入的有效性限制失败时触发（例如<input type="number" max="10">，有人会插入数字 20）。

# KeyboardEvent

用户与键盘的交互。每个事件描述一个单一的键交互。

# MouseEvent

由于用户与指点设备（例如鼠标）交互而发生的事件

# PointerEvent

由于用户与各种指向设备（例如鼠标、笔/触控笔、触摸屏以及还支持多点触控）的交互而发生的事件。除非您为旧浏览器（IE10 或 Safari 12）开发，否则建议使用指针事件。扩展 UIEvent。

# TouchEvent

由于用户与触摸设备交互而发生的事件。扩展 UIEvent。

# TransitionEvent

CSS 过渡。不完全支持浏览器。扩展 UIEvent

# UIEvent

鼠标、触摸和指针事件的基本事件。

# WheelEvent

在鼠标滚轮或类似的输入设备上滚动。（注意：wheel 事件不应与 scroll 事件混淆）

# SyntheticEvent

以上所有事件的基础事件。当不确定事件类型时应该使用
