#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_button_clicked(widget)
{
    print("Selected file: " + widget.get_filename());
    Gtk.main_quit();
}

var window = new Gtk.Window();
window.set_default_size(600, 400);
window.set_border_width(5);
window.set_title("FileChooserWidget");
window.connect("destroy", Gtk.main_quit);

var grid = new Gtk.Grid();
grid.set_row_spacing(5);
window.add(grid);

var filechooserwidget = new Gtk.FileChooserWidget();
filechooserwidget.set_vexpand(true);
grid.attach(filechooserwidget, 0, 0, 1, 1);

var buttonbox = new Gtk.ButtonBox();
buttonbox.set_layout(Gtk.ButtonBoxStyle.END);
grid.attach(buttonbox, 0, 1, 1, 1);

var buttonSelect = new Gtk.Button({label: "Select"});
buttonSelect.connect("clicked", function() {on_button_clicked(filechooserwidget)});
buttonbox.add(buttonSelect);

window.show_all();

Gtk.main();
