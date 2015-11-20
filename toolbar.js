#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("Toolbar");
window.set_default_size(-1, 200);
window.connect("destroy", Gtk.main_quit);

let grid = new Gtk.Grid();
window.add(grid);

let toolbar = new Gtk.Toolbar();
toolbar.set_vexpand(false);
toolbar.set_hexpand(true);
grid.attach(toolbar, 0, 0, 1, 1);

let toolbutton1 = new Gtk.ToolButton({label: "Play"});
toolbar.add(toolbutton1);

let toolbutton2 = new Gtk.ToggleToolButton({label: "Pause"});
toolbar.add(toolbutton2);

let toolbutton3 = new Gtk.RadioToolButton({label: "Rewind"});
toolbutton3.set_icon_name("gtk-media-rewind");
toolbar.add(toolbutton3);
let toolbutton4 = new Gtk.RadioToolButton({label: "Fast Forward",
                                            group: toolbutton3});
toolbutton4.set_icon_name("gtk-media-forward");
toolbar.add(toolbutton4);

let toolbutton5 = new Gtk.MenuToolButton({label: "History"});
toolbar.add(toolbutton5);
let menu = new Gtk.Menu();
toolbutton5.set_menu(menu);
let menuitem = new Gtk.MenuItem({label: "MenuItem"});
menu.append(menuitem);
menuitem.show();

window.show_all();

Gtk.main();
