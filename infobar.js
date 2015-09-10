#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_info_bar_changed(button)
{
    print(button.message_type)
    infobar.show();
    infobar.set_message_type(button.message_type);
}

function on_info_bar_close()
{
    infobar.hide();
}

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("InfoBar");
window.connect("destroy", Gtk.main_quit);

let grid = new Gtk.Grid();
grid.set_row_spacing(5);
grid.set_column_spacing(5);
window.add(grid);

let label = new Gtk.Label({label: "An InfoBar used to display messages."});

let infobar = new Gtk.InfoBar();
let content = infobar.get_content_area()
content.add(label);
infobar.set_show_close_button(true);
infobar.connect("response", function() {on_info_bar_close(infobar)});
grid.attach(infobar, 0, 0, 1, 1);

let buttonbox = new Gtk.ButtonBox({orientation: Gtk.Orientation.HORIZONTAL});
buttonbox.set_spacing(5);
grid.attach(buttonbox, 0, 1, 1, 1);

let buttonInformation = new Gtk.Button({label: "Information"});
buttonInformation.message_type = Gtk.MessageType.INFO
buttonInformation.connect("clicked", function() {on_info_bar_changed(buttonInformation)});
buttonbox.add(buttonInformation);
let buttonWarning = new Gtk.Button({label: "Warning"});
buttonWarning.message_type = Gtk.MessageType.WARNING
buttonWarning.connect("clicked", function() {on_info_bar_changed(buttonWarning)});
buttonbox.add(buttonWarning);
let buttonQuestion = new Gtk.Button({label: "Question"});
buttonQuestion.message_type = Gtk.MessageType.QUESTION
buttonQuestion.connect("clicked", function() {on_info_bar_changed(buttonQuestion)});
buttonbox.add(buttonQuestion);
let buttonError = new Gtk.Button({label: "Error"});
buttonError.message_type = Gtk.MessageType.ERROR
buttonError.connect("clicked", function() {on_info_bar_changed(buttonError)});
buttonbox.add(buttonError);

window.show_all();

Gtk.main();
